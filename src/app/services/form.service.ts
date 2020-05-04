import { Answer } from '@interfaces/FHIR';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http: HttpClient) { }

  getQuestionnaire(formIdentifier: string) {
    return this.http.get(environment.queryURI + '/Questionnaire?identifier=' + formIdentifier)
      .toPromise()
      .catch(err => {
        throw err;
      });
  }

  postQuestionnaireResponse(response: any, identifier: string) {
    return this.http
      .post(environment.queryURI + '/QuestionnaireResponse?identifier=' + identifier, response)
      .toPromise()
      .catch(err => {
        throw err;
      });
  }

  updateQuestionnaireResponse(response: any, id: string) {
    return this.http
      .put(environment.queryURI + '/QuestionnaireResponse/' + id, response)
      .toPromise()
      .catch(err => {
        throw err;
      });
  }

  returnAnswer(answerArray: Answer[]): string | Date {
    for (const answer of answerArray) {
      if (answer.valueString) {
        return answer.valueString;
      } else if (answer.valueCoding) {
        return answer.valueCoding.code;
      } else if (answer.valueDate) {
        return answer.valueDate;
      } else if (answer.valueReference) {
        return answer.valueReference.reference;
      }
    }
  }
}
