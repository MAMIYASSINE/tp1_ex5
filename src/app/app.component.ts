import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projet2';

  note!:string;
  notes:string[] =[];
  sousnotes:string[]=[];
  addnote(){
    this.notes.push(this.note);
    this.note="";
  }
  deletenote(index:number){
    this.notes.splice(index,1);
  }
  Ajouter_sousnote()
  {
    this.sousnotes.push(this.note);
    this.note="";
  }
  
}
