import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  public form ={
    id:null,
    username:null,
    email:null,
    fname:null,
    lname:null,
    contactno:null,
    birthday:null,
    gender:null,
  }
  user;
  //customer;
  usertype;
  username:string;
  email:string;
  contactnumber:string;
  birthday;
  fname;
  lname;
  gender;
  
  id;
  avatar : string = "assets/images/avatar.png";
  constructor(private auth:AuthService,private http: HttpClient,private router: Router) { }

  ngOnInit() {
    this.auth
    .getUserDetails(localStorage.getItem("access_token"))
      .subscribe(response => {
        
          this.user=response;
         // this.usertype = response["usertype"];
         //this.customer = response["body"];
          console.log(response);
         // this.username= response["body"].name;
         //this.users.id= response['0'].id;
          this.fname= response['0'].first_name;
          this.lname= response['0'].last_name;
          this.gender= response['0'].gender;
          this.email= response['0'].email;
          this.contactnumber= response['0'].phone_number;
          this.birthday= response['0'].birthday;
        
      });
  }
  edit(accessToken: string){
    let httpHeaders = new HttpHeaders({
      Authorization: "Bearer " + localStorage.getItem("access_token")
    });
    let input = new FormData();
  input.append('name',this.username);
  input.append('email',this.email);
  input.append('first_name',this.fname);
  input.append('last_name',this.lname);
  input.append('gender',this.gender);
  input.append('phone_number',this.contactnumber);
  input.append('birthday',this.birthday);
  
    return this.http.post("http://localhost:8000/api/user/edit",input,{
      headers: httpHeaders
    }).subscribe(
    data=>{
      this.user=data;
      console.log(data);
    }
    );
  }

}
 