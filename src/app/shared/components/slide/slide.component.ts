import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss'],
})
export class SlideComponent implements OnInit {
  @Input() optionsCard: any[];

  slideOpts = {
    slidesPerView: 2.6,
    freeMode: true,
    speed: 400
  };

  constructor() { }

  ngOnInit() {}

}
