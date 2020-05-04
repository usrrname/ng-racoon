import { Cities, PractitionerStatus } from 'fhir';
import { Component, OnInit } from '@angular/core';

import { FormBuilder } from '@angular/forms';
import { PatientService } from '@app/services/patient.service';
import { Router } from '@angular/router';
import { UtilService } from '@services/util.service';

@Component({
  selector: 'app-pract',
  templateUrl: './pract.component.html',
  styleUrls: ['./pract.component.scss']
})
export class PractComponent implements OnInit {
  city: string;
  activeStatus: PractitionerStatus[] = [
    { value: 'active' },
    { value: 'inactive' }
  ];

  resultList = [];
  cities: Cities[] = [
    { value: 'Pallet Town' },
    { value: 'Viridian City' },
    { value: 'Pewter City' }
  ];

  practForm = this.fb.group({
    city: [''],
    activeStatus: ['']
  });

  constructor(private router: Router, private patientService: PatientService, private fb: FormBuilder, private util: UtilService) { }

  buildResultList(data) {
    const entries = data.entry;
    if (entries) {
      entries.forEach(entry => {
        const { resource, address, telecom, name, gender } = entry;
        if (resource.resourceType === 'Practitioner') {
          const practResultObj: any = {};
          if (name) {
            practResultObj.givenName = name.firstName;
            practResultObj.familyName = name.lastName;
            practResultObj.id = resource.id;
            practResultObj.birthDate = this.util.getFormattedDate(name.birthDate);
          }
          if (gender) {
            practResultObj.gender = gender;
          }
          if (telecom) {
            telecom.forEach(tel => {
              if (tel.system === 'phone') {
                practResultObj.phoneNumber = tel.value;
              }
              if (tel.system === 'email') {
                practResultObj.email = tel.value;
              }
            });
          }
        }
      });
    }
  }
  onSubmit() {
    const { city } = this.practForm.value;
    this.patientService. findPractitionerInCity(city)
      .then(data => this.buildResultList(data))
      .catch(err => { throw err; });
  }

  ngOnInit() {
  }
}

