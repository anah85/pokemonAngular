import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PokeServiceService } from 'src/app/services/poke-service.service';
import { pokeRegister } from 'src/models/pokeRegister';

@Component({
  selector: 'app-pokemon-new',
  templateUrl: './pokemon-new.component.html',
  styleUrls: ['./pokemon-new.component.scss']
})
export class PokemonNewComponent implements OnInit{

  public pokeRegisterForm: FormGroup;
  public submitted: boolean = false;

  constructor(private formBuilder: FormBuilder, private PokeService:PokeServiceService){
    this.pokeRegisterForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      weight:['', [Validators.required]],
      type:['', [Validators.required]]
    })
  }

  ngOnInit(){}

  public onSubmit(){
    this.submitted = true;
    if(this.pokeRegisterForm.valid){
      const newPoke: pokeRegister = {
        name: this.pokeRegisterForm.get('name')?.value,
        weight: this.pokeRegisterForm.get('weight')?.value,
        sprites:{front_default: this.pokeRegisterForm.get('front_default')?.value},
        types: {0: {type: {name: this.pokeRegisterForm.get('type')?.value }}} 
      }
      console.log(newPoke);
      this.PokeService.pokemon.push(newPoke);

      this.pokeRegisterForm.reset();
      this.submitted = false;
    }
  }
}
