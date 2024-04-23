import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  constructor(
    private router: Router
  ){}

  @Input() title_card: String = '';
  @Input() route: String = '';

  goToPage() {
    this.router.navigate([this.route]);
  }

}
