import { Component, OnInit } from '@angular/core';
import { IspService } from '../isp.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: IspService) { }

  ngOnInit() {
  }
  login() {
    this.service.doLogin = true;
  }
}
