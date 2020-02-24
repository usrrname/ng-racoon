import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FormService {

constructor(private http: HttpClient) { }

getQuestionResource(formIdentifier: string) {
return this.http
  .get(environment.queryURI + '/Questionnaire?identifier=' + formIdentifier )
  .toPromise()
  .catch(err => {throw err;
  });
}

postQuestionnaireResponse(response: any, identifier: string) {
return this.http
  .post(environment.queryURI + '/QuestionnaireResponse?identifier=' + identifier, response)
  .toPromise()
  .catch(err => { throw err;
  });
}

updateQuestionnaireResponse(response: any, id: string) {
return this.http
  .put(environment.queryURI + '/QuestionnaireResponse/' + id, response)
  .toPromise()
  .catch(err => { throw err;
  });
}}
