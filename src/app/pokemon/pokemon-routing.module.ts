import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeLayoutComponent } from '@app/shared/components/layouts/home-layout/home-layout.component';
import { PokemonComponent } from './pokemon.component';


const routes: Routes = [
  {
  path: '', component: HomeLayoutComponent, children: [
    { path: '', component: PokemonComponent, pathMatch: 'full' }
  ]
}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }
