import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  getResourceById(resourceType: string, id: string) {
    const query = resourceType + '/' + id;
    return this.GETQueryWithParams(query);
  }

  GETQueryWithParams(queryParams) {
    return this.http.get(environment.resourceProviderURI + '/' + queryParams,
   ).toPromise();
  }

  constructor(private http: HttpClient) { }
}
