import { RouterModule, Routes } from '@angular/router';

import { HomeLayoutComponent } from '@shared/components/layouts/home-layout/home-layout.component';
import { NgModule } from '@angular/core';
import { PractComponent } from './pract/pract.component';

const routes: Routes = [  {
  path: '', component: HomeLayoutComponent, children: [
    { path: '', component: PractComponent, pathMatch: 'full' }
  ]
 }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PractRoutingModule { }
