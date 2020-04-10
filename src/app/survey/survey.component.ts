import * as _ from 'lodash';

import { AfterViewInit, Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';

import { FormService } from '@services/form.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnInit, AfterViewInit, OnDestroy {
  questionsList = [];
  title: string;
  questionUrl: string;
  formInfo: any = {};
  showSpinner: boolean;
  constructor(private http: HttpClient, private renderer: Renderer2, private formService: FormService) { }
  scrollWatcher: any;
  io: IntersectionObserver;

  ngOnInit() {
    this.formService.getQuestionResource('dummy-form')
      .then(data => {
        this.buildQuestionsList(data);
      })
      .catch(err => console.warn(err));

    window.addEventListener('scroll', (event) => {
        const container = document.querySelector('.main-container');
        // make main container as long as the page
        this.renderer.setStyle(container, 'height', 'unset');
        _.debounce(() => this.scrollWatcher(), 2000, { leading: true, trailing: true });
      }, {
        capture: true,
        passive: true
      });
  }

  startObserver() {
    const options = {
      root: null,
      rootMargin: '-64px 0px 55% 0px',
      threshold: 1.0
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        this.ioCallback(entry);
      });
    }, options);
    return observer;
  }

  public scrollTo(element: HTMLElement) {
    element.scrollIntoView({ block: 'start', behavior: 'smooth', inline: 'nearest' });
  }

  ioCallback(entry) {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        const currentlyActive = document.querySelector('nav li.active');
        const shouldBeActive = document.querySelector('nav li.' + id + '');

        if (currentlyActive && shouldBeActive) {
          this.renderer.removeClass(currentlyActive, 'active');
          this.renderer.addClass(shouldBeActive, 'active');
        }
        return;
      }
    }

ngAfterViewInit() {
    const io = this.startObserver();
    const sections = document.querySelectorAll('div.form');

    this.scrollWatcher = this.renderer.listen('document', 'scroll', () => {
      sections.forEach(section => io.observe(section));
    });
  }

ngOnDestroy(): void {
    this.scrollWatcher();
  }

buildQuestionsList(data) {
    const formInfo: any = {};

    const { resource, id } = data.entry[0];
    this.questionUrl = formInfo.fullUrl;
    this.formInfo.id = id;

    if (resource.resourceType === 'Questionnaire') {
      this.formInfo.title = resource.code[0].display;

      resource.item.forEach(el => {
        switch (el.type) {
          case 'boolean' || 'string':
            const questionObj: any = {};
            questionObj.number = el.linkId;
            questionObj.text = el.text;
            questionObj.type = el.type;
            this.questionsList.push(questionObj);
            break;
          case 'group':
            const questionGroup: any = {};
            questionGroup.list = [];
            questionGroup.type = el.type;
            questionGroup.number = el.linkId;
            questionGroup.title = el.text;
            const questionItems = el.item;
            questionItems.forEach( item => {
                questionGroup.list.push(item);
              });
            this.questionsList.push(questionGroup);
            break;
          default:
            return el;
        }
        return this.questionsList;
      });
    }
  }
}
