import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
})
export class PasswordComponent implements OnInit {
  isUpdate: boolean;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(
  ) {
    this.isUpdate = this.route.snapshot.paramMap.get('isUpdate') ? true : false;
  }

}
