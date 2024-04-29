import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  options_menu = [
    {
      title: "Meu progresso",
      route: '/minhasInfos'
    },
    {
      title: "Minha agenda",
      route: '/agenda'
    },
    {
      title: "Meu calendário",
      route: '/calendario'
    },
    {
      title: "Fórum Online",
      route: '/forum'
    },
    {
      title: "Salas virtuais",
      route: '/salas'
    },
    {
      title: "Sair",
      route: '/logout'
    }
  ]

}
