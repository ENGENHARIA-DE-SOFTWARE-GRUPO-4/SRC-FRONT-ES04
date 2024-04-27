import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent {

  constructor(
    private location: Location,
    private router: Router ){}

  events = [
    {
      topic: "Prova de TC",
      duration: "2 horas",
      begin: "14/04/2024",
      end: "14/04/2024",
      description: "Prova de teoria da computacação sobre as máquinas de turing!" 
    }, 
    {
      topic: "Prova de TC",
      duration: "2 horas",
      begin: "14/04/2024",
      end: "14/04/2024",
      description: "Prova de teoria da computacação sobre as máquinas de turing!" 
    }, 
    {
      topic: "Prova de TC",
      duration: "2 horas",
      begin: "14/04/2024",
      end: "14/04/2024",
      description: "Prova de teoria da computacação sobre as máquinas de turing!" 
    }, 
    {
      topic: "Prova de TC",
      duration: "2 horas",
      begin: "14/04/2024",
      end: "14/04/2024",
      description: "Prova de teoria da computacação sobre as máquinas de turing!" 
    }, 
    {
      topic: "Prova de TC",
      duration: "2 horas",
      begin: "14/04/2024",
      end: "14/04/2024",
      description: "Prova de teoria da computacação sobre as máquinas de turing!" 
    }
  ]

  goBack() {
    this.location.back()
  }

  createNewEvent() {
    this.router.navigate(['novo-evento'])
  }

}
