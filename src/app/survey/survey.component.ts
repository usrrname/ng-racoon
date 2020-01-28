import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormService } from '@services/form.service';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnInit {
  questionsList = [];
  title: string;
  questionUrl: string;
  formInfo: any = {};

  constructor(private http: HttpClient, private formService: FormService) {
  }

  ngOnInit() {
    this.formService.getQuestionResource('dummy-form')
    .then( data => {
      console.log(data);
      this.buildQuestionsList(data);
    })
    .catch( err => console.warn(err));
    }

buildQuestionsList(data) {
    const formInfo: any = {};

    const {resource, id, fullUrl } = data.entry[0];
    this.questionUrl = formInfo.fullUrl;
    this.formInfo.id = id;

    if (resource.resourceType === 'Questionnaire') {
      this.formInfo.title = resource.code[0].display;

      resource.item.forEach(el => {

        switch (el.type) {
          case 'boolean' || 'string':
            const questionObj: any = {};
            questionObj.number = el.linkId;
            questionObj.title = el.text;
            questionObj.type = el.type;
            this.questionsList.push(questionObj);
            break;
          case 'group':
            const questionGroup: any = {};
            const questionItems = el.item;
            questionGroup.list = [];
            questionGroup.number = el.linkId;
            questionGroup.title = el.text;

            questionItems.forEach( question => {
              questionGroup.list.push(question);
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
