import { NgModule } from '@angular/core';
import { PatientsRoutingModule } from './patients-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PatientsComponent } from './patients/patients.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';

@NgModule({
  declarations: [PatientsComponent, CreatePatientComponent],
  imports: [
    SharedModule,
    PatientsRoutingModule
  ]
})
export class PatientsModule { }
