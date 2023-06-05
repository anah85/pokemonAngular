import { PokemonNewModule } from './components/pokemon-new/pokemon-new.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonListModule } from './components/pokemon-list/pokemon-list.module';

const routes: Routes = [
  {
    path: 'pokemonList', loadChildren: () =>
    import('./components/pokemon-list/pokemon-list.module').then(m => m.PokemonListModule)
  },
  {
    path: 'pokemonNew', loadChildren: () =>
    import('./components/pokemon-new/pokemon-new.module').then(m => m.PokemonNewModule)
  },
  {path: '', redirectTo: 'pokemonList', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
