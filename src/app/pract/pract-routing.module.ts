import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PractComponent } from './pract/pract.component';
import { FeatureLayoutComponent } from '../shared/components/layouts/feature-layout/feature-layout.component';


const routes: Routes = [  {
  path: '', component: FeatureLayoutComponent, children: [
    { path: '', component: PractComponent, pathMatch: 'full' }
  ]
 }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PractRoutingModule { }
