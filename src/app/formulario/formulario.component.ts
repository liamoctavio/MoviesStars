import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona.interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  usuario: Persona = {
    nombre: 'Roberto',
    apellidos: 'Carlos do Brasil',
    edad: 18,
    email: 'lala@gmail.com',
    direccion: 'Rio Janeiro'
  }

  personaModel!: FormGroup;

//TRabajar con formBuilder
  constructor(private fb: FormBuilder) {
    this.personaModel = this.fb.group({
      nombre: [this.usuario.nombre, Validators.required],
      apellido: [this.usuario.apellidos, [Validators.required, Validators.minLength(3),Validators.maxLength(15)]],
      edad: [this.usuario.edad, Validators.required],
      email: [this.usuario.email,[Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$')]],
      direccion: [this.usuario.direccion, [Validators.required, Validators.maxLength(20)]]

    });

   }


  

  ngOnInit(): void {
  }
  guardar(){
    console.log(this.personaModel.value)
    
  }

}
