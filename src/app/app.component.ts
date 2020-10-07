import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Animal } from './Objetos/Animal';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})

export class AppComponent {
	titulo:String = "Aplicacion de ejemplo";
	arrAnimalesCreados:Array<String> = [];

	procesarDatos(form:NgForm):void{
		const nuevoAnimal = new Animal(form.value.nombre);
		this.arrAnimalesCreados.push( nuevoAnimal.toString() );
	}
}
