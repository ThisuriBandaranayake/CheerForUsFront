import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-present-status',
  templateUrl: './present-status.component.html',
  styleUrls: ['./present-status.component.scss']
})
export class PresentStatusComponent  {

  public chartType: string = 'line';

  public chartDatasets: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 90], label: 'Total Customers ' },
    { data: [28, 48, 40, 19, 46, 27, 45], label: 'Paid Customers' }
  ];

  public chartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October','november','December'];

  public chartColors: Array<any> = [
    {
      
      backgroundColor: 'rgba(220,220,220,0.2)',
      borderColor: 'rgba(220,220,220,1)',
      borderWidth: 2,
      pointBackgroundColor: 'rgba(220,220,220,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(220,220,220,1)'
  },
  {
      backgroundColor: 'rgba(151,187,205,0.2)',
      borderColor: 'rgba(151,187,205,1)',
      borderWidth: 2,
      pointBackgroundColor: 'rgba(151,187,205,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(151,187,205,1)'
    }
  ];

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }
}

  // constructor() { }

  // ngOnInit() {
  // }


