import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data: Array<any> = [
    { area: 'abc', connections: 45678, money: 123456 },
    { area: 'pqr', connections: 45678, money: 123456 },
    { area: 'xyz', connections: 45678, money: 123456 },
    { area: 'def', connections: 45678, money: 123456 },
    { area: 'qwe', connections: 45678, money: 123456 },
    { area: 'ytr', connections: 45678, money: 123456 },
  ];
  constructor() { }

  ngOnInit() {
  }

}
