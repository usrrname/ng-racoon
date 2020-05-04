import { Injectable } from '@angular/core';
import { KeyValue } from '../../interfaces/utility-interfaces';
import {Resource} from 'fhir';
import { formatDate } from '@angular/common';
@Injectable({
  providedIn: 'root'
})

export class UtilService {

fetchExtensionWithKeyWord(patient, keyword) {
  let result = '';
  patient.extension.forEach(extension => {
    if (extension.url.includes(keyword)) {
      if (extension.valueString) {
        result = extension.valueString;
      }
      if (extension.valueDate) {
        result =  extension.valueDate;
      }
    }
  });
  return result;
}

getNameFromResource(resource: Resource) {
  let lastName = '';
  let firstName = '';
  if (resource && resource.name) {
    resource.name.forEach(resourceName => {
      lastName = resourceName.family;
      resourceName.given.forEach(givenName => {
        firstName += givenName;
      });
    });
    return firstName + ' ' + lastName;
  }
}

getCurrentDate() {
  return formatDate(new Date(), 'yyyy-MM-dd', 'en');
}

getFormattedDate(date) {
  return formatDate(date, 'yyyy-MM-dd', 'en');
}

getAddress(resource) {
  let result: string;
  if (resource.address[0]) {
    const address = resource.address[0];
    result = address.line[0] + ', ' + address.city + ', ' + address.state;
  } else {
    const address = resource.address;
    result = address.line[0] + ', ' + address.city + ', ' + address.state;
  }
  return result;
}

getIdFromReference(reference) {
  return reference.substring(reference.indexOf('/') + 1, reference.length);
}

getContactInfo(telecom) {
  const contactValues: KeyValue[] = [];

  for (const item of telecom ) {
    const key: string = item.use || item.system;
    const value: string = item.value;
    delete item.rank;
    contactValues.push({key, value});
  }
  return contactValues;
}
constructor() { }
}
