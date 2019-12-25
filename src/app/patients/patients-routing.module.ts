import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientsComponent } from './patients/patients.component';
import { HomeLayoutComponent } from '../shared/components/layouts/home-layout/home-layout.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';

const routes: Routes = [
  {
   path: '', component: HomeLayoutComponent, 
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
