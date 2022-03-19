import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juros',
  templateUrl: './juros.component.html',
  styleUrls: ['./juros.component.css'],
})
export class JurosComponent implements OnInit {
  m: number;
  c: number;
  j: number;
  p: number;
  add: string;

  constructor() {
    this.m = 800;
    this.c = 1000;
    this.j = 1000;
    this.p = 9;
  }

  getJuros() {
    return (this.c * (1 + this.j)) / Math.pow(this.p, 1);
  }
  RetornarDados() {
    return [this.m, this.c, this.j, this.p];
  }

  ngOnInit() {}
}
