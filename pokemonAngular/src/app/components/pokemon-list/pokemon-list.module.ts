import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonListRoutingModule } from './pokemon-list-routing.module';
import { PokemonListComponent } from './pokemon-list.component';


@NgModule({
  declarations: [PokemonListComponent],
  imports: [
    CommonModule,
    PokemonListRoutingModule
  ]
})
export class PokemonListModule { }
