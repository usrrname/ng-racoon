import * as _ from 'lodash';

import { AfterViewInit, Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';

import { FormService } from '@services/form.service';
import { HttpClient } from '@angular/common/http';
import { QuestionnaireResponse } from 'fhir';

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
    this.formService.getQuestionnaire('pokemon-intake')
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
  ngOnSubmit() {

  }
  startObserver() {
    const options = {
      root: null,
      rootMargin: '-64px 0px 100px 0px',
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
    const { resource, id } = data.entry[0];
    console.log(data);
    this.formInfo.id = id;

    if (resource.resourceType === 'Questionnaire') {
      this.formInfo.title = resource.title;
      resource.item.forEach(item => {
        switch (item.type) {
          case 'boolean' || 'string' :
            const questionObj: any = {};
            questionObj.number = item.linkId;
            questionObj.text = item.text;
            questionObj.type = item.type;
            this.questionsList.push(questionObj);
            break;
          case 'choice':
            const choiceObj: any = {};
            choiceObj.number = item.linkId;
            choiceObj.text = item.text;
            choiceObj.type = item.type;
            choiceObj.answerList = [];
            if (item.answerOption) {
              item.answerOption.forEach(answer => {
                choiceObj.answerList.push({
                  linkId: answer.valueCoding?.code || answer.valueString,
                  value: answer.valueCoding?.display || answer.valueString
                });
              });
            }
            this.questionsList.push(choiceObj);
            break;
        }
      });
    }
  }

  buildQRResponse() {
    const questionnaireResponse = new QuestionnaireResponse();
    const questionnaireItems = [];
  }
}
