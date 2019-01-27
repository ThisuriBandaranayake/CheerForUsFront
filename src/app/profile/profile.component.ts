import { Component, OnInit } from '@angular/core';
//import { HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from '../auth.service';
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
 // usertype;
 user;
 customer;
 usertype;
 name:string;
 email:string;
 contactnumber:string;
 birthday;
 id;
 avatar : string = "assets/images/avatar.png";
  constructor(private auth:AuthService,private http: HttpClient,private router: Router) { }

  ngOnInit() {
    this.auth
    .getUserDetails(localStorage.getItem("access_token"))
      .subscribe(response => {
        if(response['body']['user_type']=="customer"){
          this.customer=response;
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
  keys() : Array<string> {
    return Object.keys(this.user);
  }

  ngOnDestroy(): void {
    localStorage.removeItem("access_token");
  }



  logout(){
  this.auth.logOut(localStorage.getItem("access_token") ).subscribe
  (
    response=>{
      console.log(response);
      this.router.navigate(["/login"]);
        
    }
  );
    
  }
  getSessionId(){
    return this.http.get("http://127.0.0.1:8000/api/user/sessions").subscribe(
        response=>{
          console.log(response);
        }
      )
  }
}


