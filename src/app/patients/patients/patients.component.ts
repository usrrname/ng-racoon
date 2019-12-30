// vendor
import { FormBuilder } from '@angular/forms';
import { Component} from '@angular/core';
import { Router } from '@angular/router';

// services
import { PatientService } from 'src/app/services/patient.service';
import { UtilService } from 'src/app/services/util.service';
import { ContactKeyValues } from '@interfaces/utility-interfaces';
import { ContactPoint } from '@interfaces/FHIR';

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

  constructor(private router: Router, private fb: FormBuilder, private patientService: PatientService, private utilService: UtilService) {}
  contactInfo: ContactKeyValues[] = [
    {
      key: 'system',
      value: 'phone' || 'fax' || 'email' || 'pager' || 'url' || 'sms' || 'Not Available'
    },
    { 
      key: 'use',
      value: 'home' || 'work' || 'temp' || 'old' ||'mobile'|| 'Not Available'
    }
  ];
  contactinfo: ContactPoint[] = [];

   buildResultList(data: any) {
    const temp: any = {};
  
    data.resourceType === "Patient" && data.name ? temp.name = this.utilService.getNameFromResource(data) : data;
    
    const contactInfo = data.telecom && data.telecom !== null 
    ? this.utilService.getContactInfo(data.telecom) : [{
      key: 'system',
      value: 'Not Available'
    }];
    
    temp.contactValues = contactInfo;
    temp.id = data.id;
    temp.birthDate = data.birthDate;
    temp.lastUpdated = this.utilService.getFormatttedDateFromGivenValueForDisplay(data.meta.lastUpdated);
    console.log(temp);
    this.resultList.push(temp);
  }

    
    onSubmit(){
      const {id} = this.form.value;
      this.patientService.fetchPatientById(id).then(
        data => {
         this.buildResultList(data);
         console.log(this.resultList);
        }).catch(err => {
          this.showErrorMessage=true;
      })
    }
  }
  
