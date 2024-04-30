import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-card3',
  templateUrl: './card3.component.html',
  styleUrl: './card3.component.scss'
})
export class Card3Component {

  myForm: FormGroup;

  comprobacion = false;

  puntaje = 0;

  constructor(
    private readonly formBuilder: FormBuilder
  ){
    this.myForm = this.crearFormulario();
  }

  private crearFormulario(): FormGroup {
    return this.formBuilder.group ({
      pregunta1: new FormControl(undefined, [Validators.required]),
      pregunta2: new FormControl(undefined, [Validators.required])
    });
  }

  comprobar(): void{
    this.comprobacion = true;
    this.myForm?.get('pregunta1')?.value==='B'?this.puntaje++:null;
    this.myForm?.get('pregunta2')?.value==='D'?this.puntaje++:null;
  }

}
