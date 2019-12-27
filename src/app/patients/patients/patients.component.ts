import { FormBuilder } from '@angular/forms';
import { Component} from '@angular/core';

import { Router } from '@angular/router';
import { PatientService } from 'src/app/services/patient.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent{
  form = this.fb.group({
    id: ['']
  })
  resultList=[];
  id: string;
  disabled=false;
  hidden: boolean;
  showErrorMessage = false;

  constructor(private router: Router, private fb: FormBuilder, private patientService: PatientService, private utilService: UtilService) {
   }
  
   buildResultList(data: any) {
    const temp: any = {};
  
    data.resourceType === "Patient" && data.name ? temp.name = this.utilService.getNameFromResource(data) : data;
    
    const contactInfo = data.telecom && data.telecom !== null 
    ? this.utilService.getContactInfo(data.telecom) : ["Not Available"];
    
    temp.contact = contactInfo;
    temp.id = data.id;
    temp.birthDate = data.birthDate;
    temp.lastUpdated = this.utilService.getFormatttedDateFromGivenValueForDisplay(data.meta.lastUpdated);
    
    this.resultList.push(temp)
    console.log(this.resultList);
  }

    onSubmit(){
      const {id} = this.form.value;
      this.patientService.fetchPatientById(id).then(
        data => {
         this.buildResultList(data);
        }).catch(err => {
          console.log(err);
          this.showErrorMessage=true;
      })
    }
  }
  
