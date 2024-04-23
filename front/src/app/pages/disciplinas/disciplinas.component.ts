import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-disciplinas',
  templateUrl: './disciplinas.component.html',
  styleUrls: ['./disciplinas.component.scss']
})
export class DisciplinasComponent {

  constructor(
    private router: Router,
    private route: ActivatedRoute
    ){}

  disciplinas = [
    {
      name: "Engenharia de Software",
      nota1: 7,
      nota2: 9,
      nota3: 10,
      media: 8.6,
      creditos: '4 Créditos'
    },
    {
      name: "Engenharia de Software",
      nota1: 7,
      nota2: 9,
      nota3: 10,
      media: 8.6,
      creditos: '4 Créditos'

    },
    {
      name: "Engenharia de Software",
      nota1: 7,
      nota2: 9,
      nota3: 10,
      media: 8.6,
      creditos: '4 Créditos'
    },
    {
      name: "Engenharia de Software",
      nota1: 7,
      nota2: 9,
      nota3: 10,
      media: 8.6,
      creditos: '4 Créditos'
    },
    {
      name: "Engenharia de Software",
      nota1: 7,
      nota2: 9,
      nota3: 10,
      media: 8.6,
      creditos: '4 Créditos'
    },
  ]

  goToDisciplina(disciplina_name: string) {
    this.router.navigate(['disciplina'], { 
      relativeTo: this.route,
      state: {
        ...window.history.state,
        disciplina: disciplina_name
      }
    })
  }

  registerDisciplina() {
    
  }
}
