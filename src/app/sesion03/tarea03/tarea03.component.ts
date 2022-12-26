import { Component } from '@angular/core';

@Component({
  selector: 'app-tarea03',
  templateUrl: './tarea03.component.html',
  styleUrls: ['./tarea03.component.css']
})
export class Tarea03Component {
  titulo='FRAMEWORK ANGULAR';
  
  cursos:string[]=[];
  addcurso(nombrec:string){
    this.cursos.push(nombrec)
  }
}
