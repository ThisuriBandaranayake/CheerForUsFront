import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  loginFormModalEmail = new FormControl('', Validators.email);
  loginFormModalPassword1 = new FormControl('', [Validators.required,Validators.minLength(6)]);
  loginFormModalPassword2= new FormControl('', [Validators.required,Validators.minLength(6)]);
  loginFormModalPassword3 = new FormControl('', [Validators.required,Validators.minLength(6)]);
user;
usertype:string;
currentPassword;
 newPassword;
 confirmNewPassword;
 errormsg1:string;
 errormsg2:string;
 errormsg3:string;
 msg:string;
 errorData:any;

  constructor(private auth:AuthService,private router: Router,private http: HttpClient,private location: Location) { }

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

  logout(){
    this.auth.logOut(localStorage.getItem("access_token") ).subscribe
    (
      response=>{
        console.log(response);
        this.router.navigate(["/login"]);
          
      }
    );
      
    }
    
  changePassword(){
    let httpHeaders = new HttpHeaders({
      Authorization: "Bearer " + localStorage.getItem("access_token")
    });
    let input = new FormData();
    input.append('current_password',this.currentPassword);
    input.append('new_password',this.newPassword);
    input.append('confirm_new_password',this.confirmNewPassword);
    return this.http.post('http://127.0.0.1:8000/api/user/password-change',input,{headers: httpHeaders }).subscribe(
        data=>{
          console.log(data);
          this.msg=data['message'];
          alert(this.msg);
          this.currentPassword=null;
          this.newPassword=null;
          this.confirmNewPassword=null;
          

        },
        error =>{
          this.errorData = error;
          console.log(error);
          console.log(error.error.errors.current_password);
          console.log(error.error.errors.new_password);
          console.log(error.error.errors.confirm_new_password);

          this.errormsg1=error['error']['message'];
          this.errormsg2=error['error']['errors']['new_password'];
          this.errormsg3=error['error']['errors']['confirm_new_password'];
          alert(this.errormsg1);
          // alert(this.errormsg2);
          // alert(this.errormsg3);
        } 
      )
  }

}
