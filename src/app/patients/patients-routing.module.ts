import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientsComponent } from './patients/patients.component';
import { FeatureLayoutComponent } from '../shared/components/layouts/feature-layout/feature-layout.component';


const routes: Routes = [
  {
    path: '', component:  FeatureLayoutComponent, children:[
      {path:'', component: PatientsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientsRoutingModule { }
