import { NgModule } from '@angular/core';
import { PatientsRoutingModule } from './patients-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PatientsComponent } from './patients/patients.component';

@NgModule({
  declarations: [PatientsComponent],
  imports: [
    SharedModule,
    PatientsRoutingModule
  ]
})
export class PatientsModule { }
