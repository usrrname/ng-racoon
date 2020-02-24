import { RouterModule, Routes } from '@angular/router';

import { HomeLayoutComponent } from '@shared/components/layouts/home-layout/home-layout.component';
import { NgModule } from '@angular/core';
import { SurveyComponent } from './survey.component';

const routes: Routes = [
  {
  path: '', component: HomeLayoutComponent, children: [
    { path: '', component: SurveyComponent, pathMatch: 'full' }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SurveyRoutingModule { }
