import { Component, OnInit } from '@angular/core';
import { PokeServiceService } from 'src/app/services/poke-service.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit{

 pokemon: any[] = [];

  constructor(private pokeService: PokeServiceService){
   this.pokemon = this.pokeService.pokemon;
  }

  ngOnInit() {
    this.pokeService.getPokemon().subscribe((res: any)=> {
      res.results.forEach((results:{name:string}) => {
        this.pokeService.getMoreDta(results.name).subscribe((response: any) => {
       if(this.pokeService.pokemon.length < 12){
        this.pokeService.pokemon.push(response);
       }
        })
      });
    })
  }
}
