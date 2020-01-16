import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//components

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
  { path: 'practicioners', loadChildren: () => import('./pract/pract.module').then(m => m.PractModule)
  },
  { path: 'pokemon', loadChildren: () => import('./pokemon/pokemon.module').then(m => m.PokemonModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
