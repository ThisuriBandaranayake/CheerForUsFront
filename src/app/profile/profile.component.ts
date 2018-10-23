import { Component, OnInit } from '@angular/core';
//import { HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
 // usertype;
  user;
  customers;
  usertype;
  name:string;
  email:string;

  avatar : string = "assets/images/avatar.png";
  constructor(private auth:AuthService) { }

  ngOnInit() {
    this.auth
    .getUserDetails(localStorage.getItem("access_token"))
      .subscribe(response => {
       
        if(response['body']['user_type']=="customer"){
          console.log(response)
          }
          data=>{
            console.log(data);
            this.user=data;
          }
        this.usertype = response["usertype"];
        this.user = response["body"];
      });
  }
  keys() : Array<string> {
    return Object.keys(this.user);
  }

  ngOnDestroy(): void {
    localStorage.removeItem("access_token");
  }
}


