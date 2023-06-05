import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from './core/core/core.module';
import { PokemonNewModule } from './components/pokemon-new/pokemon-new.module';
import { PokemonListModule } from './components/pokemon-list/pokemon-list.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    PokemonNewModule,
    PokemonListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
