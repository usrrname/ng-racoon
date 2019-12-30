import { Component, OnInit } from '@angular/core';
import { PatientService } from '@app/services/patient.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

export interface Cities {
  value: string;
  viewValue: string;
}

export interface PractitionerStatus {
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

  activeStatus : PractitionerStatus[]  = [
    {value: 'active', viewValue: 'Active'},
    {value: 'inactive', viewValue: 'Inactive'}
  ]
  resultList=[];
  cities: Cities[] = [
    {value: 'Yonkers', viewValue: 'Yonkers'},
    {value: 'Seattle', viewValue: 'Seattle'},
    {value: 'Los Angeles', viewValue: 'Los Angeles'}
  ];

  practForm = this.fb.group({
    city: [''],
    activeStatus: ['']
  });

  constructor(private router: Router, private patientService: PatientService, private fb: FormBuilder, ) {

   }
  
  buildResultList(data){
    console.log(data);
    data.entry.forEach(element => {
      
    });
  }

  onSubmit(){
    const {city} = this.practForm.value;
    this.patientService.findPracticionerInCity(city)
    .then(data => this.buildResultList(data))
    .catch(err => {throw err});
  }

  ngOnInit(){
  }
}
