import { RouterModule, Routes } from '@angular/router';

import { CreatePatientComponent } from './create-patient/create-patient.component';
import { HomeLayoutComponent } from '../shared/components/layouts/home-layout/home-layout.component';
import { NgModule } from '@angular/core';
import { PatientsComponent } from './patients/patients.component';

const routes: Routes = [
  { path: '', component: HomeLayoutComponent,
   children: [
     { path: '', component: PatientsComponent, pathMatch: 'full' },
     { path: 'create-patient', component: CreatePatientComponent, pathMatch: 'full'}
   ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientsRoutingModule { }
