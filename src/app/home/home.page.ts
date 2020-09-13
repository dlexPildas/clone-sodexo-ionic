import { Component, ElementRef, ViewChild } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('blocked') blockedCardElement: ElementRef;
  isBlocked = false;

  optionsCard: any[] = [
    {icon: 'card-outline', text: 'Ver cartão', link: ''},
    {icon: 'key-outline', text: 'Esqueci senha', link: 'forgot-password'},
    {icon: 'lock-open-outline', text: 'Alterar senha', link: 'update-password/true'},
    {icon: 'lock-closed-outline', text: 'Bloquear', link: '', action: true}
  ];

  blockedCardVisible(): void {
    this.blockedCardElement.nativeElement.classList.add('blocked');
    this.blockedCardElement.nativeElement.classList.remove('no-blocked');
  }

  blockedCardInvisible(): void {
    this.blockedCardElement.nativeElement.classList.remove('blocked');
    this.blockedCardElement.nativeElement.classList.add('no-blocked');
  }

  constructor() {}

}
