import { Component, OnInit } from '@angular/core';
import { IspService } from '../isp.service';

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

  public pieChartLabels: string[] = ['Pending', 'InProgress', 'OnHold', 'Complete', 'Cancelled'];
  public pieChartData: number[] = [21, 39, 10, 14, 16];
  public pieChartType = 'pie';
  public pieChartOptions: any = {
    'backgroundColor': [
               '#FF6384',
            '#4BC0C0',
            '#FFCE56',
            '#E7E9ED',
            '#36A2EB'
            ]
          };
  // events on slice click
  public chartClicked(e: any): void {
    console.log(e);
  }
 // event on pie chart slice hover
  public chartHovered(e: any): void {
    console.log(e);
  }

  constructor(private service: IspService) { }

  ngOnInit() {
  }

}
