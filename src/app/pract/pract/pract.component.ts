import { Component, OnInit } from '@angular/core';
import { PatientService } from '@app/services/patient.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

export interface Cities {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-pract',
  templateUrl: './pract.component.html',
  styleUrls: ['./pract.component.scss']
})
export class PractComponent implements OnInit {
  city: string;
  activeStatus : string = 'active' || 'inactive';
  resultList=[];
  cities: Cities[] = [
    {value: 'NewYork-0', viewValue: 'New York'},
    {value: 'Boston-1', viewValue: 'Boston'},
    {value: 'Toronto-2', viewValue: 'Toronto'}
  ];

  practForm = this.fb.group({
    city: [''],
    activeStatus: ['']
  });

  constructor(private router: Router, private patientService: PatientService, private fb: FormBuilder, ) {

   }
   

  ngOnSubmit(){
    const {city, activeStatus} = this.practForm.value;
    this.patientService.findActivePracticionerInCity(city, activeStatus)
    .then(data => console.log(data))
    .catch(err => {throw err})
    ;
  }

ngOnInit(){
}
}
