import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from "@angular/router";
import { AuthService } from '../auth.service';
import { stringify } from '@angular/core/src/util';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  
 users;
  email;
  password;
  uemail;
  code;
  newPassword;
  newCPassword;
  errorData:string;
  emailRequest:string;
  response: string;
  error: string;
  errormsg:string;
  errormsg2:string;
  msg:any;
  
  constructor(public fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private auth: AuthService
  ) { }

  ngOnInit() {
   

  }


  onSubmit(): void {
    
    this.auth.sendLoginRequest(this.email, this.password).subscribe(
      response => {
        // dialogRef.close();

        localStorage.setItem('access_token', response['body']['access_token']);
        console.log(response);
        if ((response['body']['user_type']) == "customer") {
          this.router.navigate(["/profile"]);
        }
        else if ((response['body']['user_type']) == "admin") {
          this.router.navigate(["/admin-dashboard"]);
        }
        else if ((response['body']['user_type']) == "institute") {
          this.router.navigate(["/institute-dash-board"]);
        }
        //alert(this.getDialogMessage(response));
        console.log(response);
      },
      // error => {
      //   console.log(error);
      //  console.log(error['error']['message']);
      //  console.log(error['error']['error']);
      //  this.errormsg=error['error']['error'];
      //   alert(this.errormsg );
      // }
      data => {
        this.errorData = data;
      //   console.log(data);
      //  console.log(data.error.errors.birthday[0]);
      //  console.log(data.error.errors.email[0]);
      //  console.log(data.error.errors.gender[0]);
      // // this.errormsg=error['errors']['errors'];
      // console.log(data.error.errors.message);
      // console.log(data.error.errors.email);
      console.log(data);
     
      this.errormsg = data['error']['message'];
      alert(this.errormsg);
        
      },
    );
  }

  resetRequest(){
      let input=new FormData();
      input.append('email',this.emailRequest);
      return this.http.post('http://127.0.0.1:8000/api/user/password-reset-request',input).subscribe(
        data => {
          
         // this.users = data;
         console.log(data['message']);
          this.msg = data['message'];
          alert(this.msg);
          console.log(data);
          this.emailRequest=null;
          // 
          
        },
        error =>{
          console.log(error);
          this.errormsg=error['error']['message'];
          alert(this.errormsg);
        }
    );
  }

  reset(){
    let input= new FormData();
    input.append('email',this.uemail);
    input.append('code',this.code);
    input.append('password',this.newPassword);
    input.append('confirm_password',this.newCPassword);
    
    return this.http.post('http://127.0.0.1:8000/api/user/password-reset',input).subscribe(
      data => {
       
       // this.users = data;
        console.log(data);
        this.errormsg=data['message'];
        alert(this.errormsg);
        this.uemail=null;
        this.code=null;
        this.newPassword=null;
        this.newCPassword=null;
        this.router.navigate(["/login"]);
      },
      error =>{
        console.log(error);
        this.errormsg=error['error']['message'];
        alert(this.errormsg);
      }
  );
  }
 


}