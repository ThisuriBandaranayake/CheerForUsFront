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
  avatar : string = "assets/images/avatar.png";
  constructor(private auth:AuthService) { }

  ngOnInit() {
    this.auth
    .getUserDetails(localStorage.getItem("access_token"))
      .subscribe(response => {
        console.log(response)
        //this.usertype = response["usertype"];
        this.user = response["body"];
      });
  }

}
