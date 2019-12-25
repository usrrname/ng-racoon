import { Component, OnInit } from '@angular/core';
import * as FHIR from '../../../interfaces/FHIR';
import { UtilService } from '../../services/util.service';

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.scss']
})
export class CreatePatientComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
