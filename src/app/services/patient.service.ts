import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class PatientService {
  
  constructor(private http: HttpClient) { }

  fetchPatientById( _id: string){
    console.log()
    return this.http
    .get(environment.queryURI + '/Patient?' + '_id=' + _id )
    .toPromise().then(data => {
      console.log(data);
    }).catch(err => {
      throw err;
    });
  }

  // fetchPatient(id: string, identifier: string){
  //   return this.http
  //   .get(environment.queryURI + '/Patient?_id=' + id + '&identifier=' , 
  //   {})
  //   .toPromise();
  // }
}
