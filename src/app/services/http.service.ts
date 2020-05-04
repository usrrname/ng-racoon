import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  getResourceById(resourceType: string, id: string) {
    const query = resourceType + '/' + id;
    return this.getQuery(query);
  }

  getQuestionnaireByIdentifier(identifier: string) {
    const query = 'Questionnaire?identifier=' + identifier;
    return this.getQuery(query);
  }

  getQuery(queryParams) {
    return this.http.get(environment.resourceProviderURI + '/' + queryParams,
    ).toPromise();
  }

  postQR(id) {
    return this.http.post(environment.resourceProviderURI + '/' + id, { headers: HttpHeaders }).toPromise();
  }

  matchPatient(data) {
    return this.http.post(environment.resourceProviderURI + '/Patient/$match', data)
      .toPromise();
  }
  constructor(private http: HttpClient) { }
}
