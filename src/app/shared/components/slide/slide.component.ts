import { Router } from '@angular/router';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss'],
})
export class SlideComponent implements OnInit {
  @Input() optionsCard: any[];
  @Output() blockedCard = new EventEmitter();

  slideOpts = {
    slidesPerView: 2.6,
    freeMode: true,
    speed: 400
  };

  constructor(
    private router: Router
  ) { }

  ngOnInit() {}

  action(event: Event, action: any): void {
    event.stopPropagation();
    if (action.action) {
      return this.enableBlockedCard();
    }
    this.router.navigate([`/${action.link}`]);
  }

  enableBlockedCard() {
    this.blockedCard.emit();
  }

}
