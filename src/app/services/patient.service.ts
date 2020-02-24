import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class PatientService {

  constructor(private http: HttpClient) { }

fetchPatientById(id) {
  return this.http
  .get(environment.queryURI + '/Patient/' + id )
  .toPromise().catch(err => {
    throw err;
  });
  }

findPracticionerInCity(city) {
return this.http
.get(environment.queryURI + '/Practitioner' + '?address-city=' + city)
.toPromise().catch(err => {
  throw err;
});
}
}
