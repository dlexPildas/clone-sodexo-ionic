import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-extract',
  templateUrl: './extract.component.html',
  styleUrls: ['./extract.component.scss'],
})
export class ExtractComponent implements OnInit {

  extrat: any[];
  constructor() { }

  ngOnInit() {
    this.extrat = [
      {
        date: '02/09/2020',
        label: 'DISPONIBILIZAÇÃO DE VALOR',
        value: 349.87,
        isBuy: false
      },
      {
        date: '27/08/2020',
        label: 'DISTRIBUIDORA SAO ROQUE',
        value: 51.00,
        isBuy: true
      },
      {
        date: '23/08/2020',
        label: 'MERCANTIL RODRIGUES',
        value: 51.52,
        isBuy: true
      },
      {
        date: '07/08/2020',
        label: 'DISTRIBUIDORA SAO ROQUE',
        value: 65.94,
        isBuy: true
      },
      {
        date: '06/08/2020',
        label: 'DISTRIBUIDORA SAO ROQUE',
        value: 68.16,
        isBuy: true
      },
      {
        date: '05/08/2020',
        label: 'BOMPRECO SUPERM',
        value: 50.60,
        isBuy: true
      },
      {
        date: '05/08/2020',
        label: 'DISPONIBILIZAÇÃO DE VALOR',
        value: 362.17,
        isBuy: true
      },
      {
        date: '05/08/2020',
        label: 'HORTIFRUITI SABOR DA TERRA',
        value: 349.87,
        isBuy: false
      },
      {
        date: '07/08/2020',
        label: 'DISTRIBUIDORA SAO ROQUE',
        value: 65.94,
        isBuy: true
      },
      {
        date: '06/08/2020',
        label: 'DISTRIBUIDORA SAO ROQUE',
        value: 68.16,
        isBuy: true
      },
      {
        date: '05/08/2020',
        label: 'BOMPRECO SUPERM',
        value: 50.60,
        isBuy: true
      },
    ];
  }

}
