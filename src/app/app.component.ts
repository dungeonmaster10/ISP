import { Component, OnInit } from '@angular/core';
import { IspService } from './isp.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor(private service: IspService, private router: Router) {
  }
  logout() {
    this.service.doLogin = false;
  }
  ngOnInit() {
    this.router.navigate(['']);
  }
}
