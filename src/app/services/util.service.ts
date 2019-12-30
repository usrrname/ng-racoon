import { Injectable, Output } from '@angular/core';
import { formatDate } from '@angular/common';
import { ContactKeyValues } from '@interfaces/utility-interfaces';
import { ContactPoint } from '@interfaces/FHIR';

@Injectable({
  providedIn: 'root'
})

export class UtilService {

  deepClone(obj){
    let mutatedObject = {};
    return mutatedObject = JSON.parse(JSON.stringify(obj));
  }

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

  getNameFromResource(resource) {
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

  getFormatttedDateFromGivenValue(date) {
    return formatDate(date, 'yyyy-MM-dd', 'en');
  }

  getFormatttedDateFromGivenValueForDisplay(date) {
    return formatDate(date, 'MM-dd-yyyy', 'en');
  }

  sortArrayWithColumnName(array, columnName) {
    array = array.sort((a, b) => {
      if (a.columnName && b.columnName) {
        return (
          b.columnName - a.columnName
        );
      }
    });
    return array;
  }

  sortArray(array) {
    array = array.sort((a, b) => {
      if (a && b) {
        return (
          b - a
        );
      }
    });
    return array;
  }

  getIdFromReference(reference) {
    return reference.substring(reference.indexOf('/') + 1, reference.length);
  }

  getContactInfo(telecom){
    let contactValues: ContactKeyValues[] = [];

    for (let item of telecom ){
      let key: string = item.use || item.system;
      let value : string = item.value;
      delete item.rank;
      key ?  contactValues.push({key: key, value: value}) : item;
    };
    return contactValues;
  }

    constructor() { }
  }
