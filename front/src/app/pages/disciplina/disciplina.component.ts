import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-disciplina',
  templateUrl: './disciplina.component.html',
  styleUrls: ['./disciplina.component.scss']
})
export class DisciplinaComponent {

  constructor(private location: Location){}

  neverRegister: boolean = true;

  faltas = [
    {
      data: "11/11/2011",
      quantidade: 2,
      justificativa: "Sim"
    },
    {
      data: "11/11/2011",
      quantidade: 2,
      justificativa: "Não"
    },
    {
      data: "11/11/2011",
      quantidade: 2,
      justificativa: "Sim"
    }
  ]
  disciplina_title = "Engenharia de software"
  options_justificativa = [
    "Sim",
    "Não"
  ]

  estagios = [
    "1º estágio",
    "2º estágio",
    "3º estágio"
  ]

  goBack() {
    this.location.back()
  }
}
