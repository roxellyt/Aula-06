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

  constructor() {
    this.m = 800;
    this.c = 1000;
    this.j = 1000;
    this.p = 9;
  }
  ngOnInit() {}
}
