import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-user-sign-up',
  templateUrl: './user-sign-up.component.html',
  styleUrls: ['./user-sign-up.component.scss']
})
export class UserSignUpComponent implements OnInit {

  public form ={
    username:null,
    email:null,
    password:null,
    cpassword:null,
    fname:null,
    lname:null,
    gender:null,
    contactno:null,
    birthday:null,
  }
  errormsg:string;
  users;
  id:number;
  username:string;
    email:string;
    password:string;
    cpassword:string;
    fname:string;
    lname:string;
    gender:string;
    contactno:string;
    birthday:string;

    errorData:any;

  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit() {
  }

 

  signup () {
 
    let input = new FormData();
    input.append('name',this.username);
    input.append('email',this.email);
    input.append('first_name',this.fname);
    input.append('last_name',this.lname);
    input.append('phone_number',this.contactno); 
    input.append('birthday',this.birthday);
    input.append('gender',this.gender);
    input.append('user_type',"customer");
    input.append('password',this.password);
    input.append('confirm_password',this.cpassword);
      return this.http.post('http://127.0.0.1:8000/api/user/signup',input).subscribe(
        data => {
          this.users = data;
          console.log(data);
          // this.username=null;
          // this.email=null;
          // this.password=null;
          // this.cpassword=null;
          // this.fname=null;
          // this.lname=null;
          // this.contactno=null;
          // this.birthday=null;
          // this.gender=null;
          this.router.navigate(["/login"]);
        },
        data => {
          this.errorData = data;
        //   console.log(data);
        //  console.log(data.error.errors.birthday[0]);
        //  console.log(data.error.errors.email[0]);
        //  console.log(data.error.errors.gender[0]);
        // // this.errormsg=error['errors']['errors'];
        console.log(data.error.errors.email);
        console.log(data.error.errors.birthday);
        console.log(data.error.errors.gender);
        console.log(data.error.errors.name);
        console.log(data.error.errors.phone_number);
        console.log(data.error.errors.password);
        console.log(data.error.errors.confirm_password);
        console.log(data.error.errors.first_name);
        console.log(data.error.errors.last_name);
        console.log(data);
        
          console.log(data.error.message);
         this.errormsg=data.error.message;
          alert(this.errormsg);
        },
      
      );
     
    } 
  
}
