import { Component } from '@angular/core';
// vendor
import { FormBuilder } from '@angular/forms';
import { KeyValue } from '@interfaces/utility-interfaces';
// services
import { PatientService } from '@services/patient.service';
import { UtilService } from '@services/util.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})

export class PatientsComponent {
form = this.fb.group({
  id: ['']
});
resultList = [];
id: string;
disabled: false;
hidden: boolean;
showErrorMessage = false;

constructor(
  private fb: FormBuilder,
  private patientService: PatientService,
  private utilService: UtilService) {}

contactValues: KeyValue[] = [
  {
    key: 'system',
    value: 'phone' || 'fax' || 'email' || 'pager' || 'url' || 'sms' || 'Not Available'
  },
  {
    key: 'use',
    value: 'home' || 'work' || 'temp' || 'old' || 'mobile' || 'Not Available'
  }
];


buildResultList(data: any) {
const temp: any = {};

temp.name = (data.resourceType === 'Patient' && data.name) ? this.utilService.getNameFromResource(data) : data;

const contactInfo = data.telecom && data.telecom !== null
? this.utilService.getContactInfo(data.telecom) : [{
  key: 'system',
  value: 'Not Available'
}];

temp.contactValues = contactInfo;
temp.id = data.id;
temp.birthDate = data.birthDate;
temp.lastUpdated = this.utilService.getFormattedDate(data.meta.lastUpdated);
this.resultList.push(temp);
}

onSubmit() {
  const {id} = this.form.value;
  this.patientService.fetchPatientById(id).then(
    data => {
      this.buildResultList(data);
    }).catch(err => {
      this.showErrorMessage = true;
  });
  }
}

