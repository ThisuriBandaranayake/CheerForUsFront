import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from "@angular/router";
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
//  public form={
//     email:null,
//     password:null,
//   }
email;
password;
response:string;
//   users;
//     id:number;
//     email:string;
//     password:string;
// response :string;
  elegantForm: FormGroup;
  constructor(public fb: FormBuilder,
              private http:HttpClient,
               private router: Router,
               private auth:AuthService
               ) {}

  ngOnInit() {
  }

  onSubmit (): void {
    
    this.auth.sendLoginRequest(this.email, this.password).subscribe(
      response => {
       // dialogRef.close();
        
          localStorage.setItem('access_token', response['body']['success']['token']);
          this.router.navigate(["/profile"]);
        
      
      },
    
    );
  }

  // onSubmit(){
  //  let  input=new FormData;
  //  input.append('email',this.email);
  //  input.append('password',this.password);
  //  return this.http.post('http://127.0.0.1:8000/api/login',input).subscribe(
  //    data=>{
  //      this.users=data;
  //      console.log(data);
       
  //       localStorage.setItem('access_token', data['body']['access_token']);
  //       this.router.navigate(["/profile"]);
      
  //      this.email=null;
  //      this.password=null;
  //     // this.router.navigate(["/profile"], { "queryParams": data });
  //    }
  //  )
  // }

}
