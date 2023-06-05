import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonNewComponent } from './pokemon-new.component';

const routes: Routes = [
  {path: '', component: PokemonNewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonNewRoutingModule { }
