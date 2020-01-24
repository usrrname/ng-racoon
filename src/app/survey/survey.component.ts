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

  constructor(private http: HttpClient, private formService: FormService) {
  }

  ngOnInit() {
    this.formService.getQuestionResource('dummy-form')
    .then( data => {console.log(data);
                    this.buildQuestionsList(data);
    })
    .catch( err => console.warn(err));
    }

buildQuestionsList(data) {
    const formInfo: any = {};
    const questionGroup: any = {};
    const questionObj: any = {};

    const {resource} = data.entry[0];

    if (resource.resourceType === 'Questionnaire') {
      formInfo.title = resource.code[0].display;

      resource.item.forEach(item => {
        if (item.type !==  'group') {
          questionObj.number = item.linkId;
          questionObj.title = item.text;
          questionObj.type = item.type;
        }
        if (item.type ===  'group' && item.item.length > 1) {
          questionGroup.list = [];
          questionGroup.number = item.linkId;
          questionGroup.title = item.text;
          item.item.forEach(question => {questionGroup.list.push(question); });
        }
      });
      this.questionsList.push(questionObj);
      this.questionsList.push(questionGroup);
      }
    console.log(this.questionsList);
    }
  }
