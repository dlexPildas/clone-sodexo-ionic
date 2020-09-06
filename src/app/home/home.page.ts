import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  optionsCard: any[] = [
    {icon: 'card-outline', text: 'Ver cartão'},
    {icon: 'key-outline', text: 'Esqueci senha'},
    {icon: 'lock-open-outline', text: 'Alterar senha'},
    {icon: 'lock-closed-outline', text: 'Bloquear'}
  ];

  constructor() {}

}
