import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components

import { HomeComponent } from './components/home/home.component';
import { HomeLayoutComponent } from './shared/components/layouts/home-layout/home-layout.component';

const routes: Routes = [
  {
    path: '', component: HomeLayoutComponent,
    children: [
      { path: '', component: HomeComponent, pathMatch: 'full' }
    ]
  },
  { path: 'patients', loadChildren: () => import('./patients/patients.module').then(m => m.PatientsModule)
  },
  { path: 'practitioners', loadChildren: () => import('./pract/pract.module').then(m => m.PractModule)
  },
  { path: 'survey', loadChildren: () => import('./survey/survey.module').then(m => m.SurveyModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
