import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

import { Router } from '@angular/router';
import { PatientService } from 'src/app/services/patient.service';
@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent{
  form: FormGroup;
  @Input() id : string;
  resultList = [];
  disabled='false';
  
  constructor(private router: Router, private fb: FormBuilder, private patientService: PatientService) {
    this.form = new FormGroup({
      id: new FormControl('')
    })
   }

  onSubmit(){
    this.patientService.fetchPatientById(this.id).then(
      data => {
        console.log(data)
    }).catch(err => {
      console.warn(this.form);
    })
  }
}
