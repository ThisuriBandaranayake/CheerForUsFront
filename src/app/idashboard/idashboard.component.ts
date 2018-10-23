import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
@Component({
  selector: 'app-idashboard',
  templateUrl: './idashboard.component.html',
  styleUrls: ['./idashboard.component.scss']
})
export class IDashboardComponent implements OnInit {
  user;
  institutes

  constructor(private auth:AuthService) { }

  ngOnInit() {
    this.auth
    .getUserDetails(localStorage.getItem("access_token"))
      .subscribe(response => {
       
        if(response['body']['user_type']=="institute"){
          console.log(response)
          }
       
      });
  }

}
