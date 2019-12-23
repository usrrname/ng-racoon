import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class PatientService {

  constructor(private http: HttpClient) { }

  fetchPatientById(id){
    return this.http
    .get(environment.queryURI + '/Patient/' + id )
    .toPromise().catch(err => {
      throw err;
    });
  }

  findActivePracticionerInCity(city, activeStatus){
    return this.http
    .get(environment.queryURI + '/Practicioner/' + '&address-city=' + city + '&_sort=' + activeStatus)
      .toPromise().then( data =>
        console.log(data)
      ).catch(err => {
        throw err;
      })
  }
}
