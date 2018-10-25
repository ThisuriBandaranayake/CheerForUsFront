import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
user;
usertype:string;

  constructor(private auth:AuthService) { }

  ngOnInit() {
    this.auth
    .getUserDetails(localStorage.getItem("access_token"))
      .subscribe(response => {
        if(response['body']['user_type']=="admin"){
          this.user=response;
          this.usertype = response["usertype"];
         this.user = response["body"];
         console.log(response)
          }
       
          // data=>{
          //   console.log(data);
          //   if(response['body']['user_type']=="customer"){
          //     this.user=data;
          //    // console.log(response)
          //     }
            
          // }
        
      });
  }

}
