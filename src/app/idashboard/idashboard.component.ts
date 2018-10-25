import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
@Component({
  selector: 'app-idashboard',
  templateUrl: './idashboard.component.html',
  styleUrls: ['./idashboard.component.scss']
})
export class IDashboardComponent implements OnInit {
  user;
  institutes;
  usertype;

  constructor(private auth:AuthService) { }

  ngOnInit() {
    this.auth
    .getUserDetails(localStorage.getItem("access_token"))
      .subscribe(response => {
        if(response['body']['user_type']=="institute"){
          this.user=response;
          this.usertype = response["usertype"];
         this.user = response["body"];
         // console.log(response)
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
