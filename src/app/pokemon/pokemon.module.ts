import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonComponent } from './pokemon.component';
import { SharedModule } from '@app/shared/shared.module';


@NgModule({
  declarations: [PokemonComponent],
  imports: [
    SharedModule,
    CommonModule,
    PokemonRoutingModule
  ]
})
export class PokemonModule { }
