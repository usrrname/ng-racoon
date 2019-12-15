import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientsRoutingModule } from './patients-routing.module';
import { PatientListComponent } from './patient-list/patient-list.component';
import { SharedModule } from '../shared/shared.module';
import { PatientsComponent } from './patients/patients.component';
import { FeatureLayoutComponent } from '../shared/components/layouts/feature-layout/feature-layout.component';


@NgModule({
  declarations: [FeatureLayoutComponent, PatientsComponent, PatientListComponent],
  imports: [
    SharedModule,
    CommonModule,
    PatientsRoutingModule
  ],
  exports: [
    PatientsModule,
    PatientsComponent,
    PatientListComponent
  ]
})
export class PatientsModule { }
