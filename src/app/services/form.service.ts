import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http: HttpClient) { }

  getQuestionResource(formIdentifier: string) {
   return this.http
    .get(environment.queryURI + '/Questionnaire?identifier=' + formIdentifier )
    .toPromise()
    .catch(err => {throw err
    }) 
  }
}
