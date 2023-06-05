import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonNewRoutingModule } from './pokemon-new-routing.module';
import { PokemonNewComponent } from './pokemon-new.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [PokemonNewComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PokemonNewRoutingModule
  ]
})
export class PokemonNewModule { }
