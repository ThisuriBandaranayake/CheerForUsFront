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

  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit() {
  }

  
  getDialogMessage(data) {
    let msg: string;
    console.log(data.status != null);
    if (data.status != null) {
      msg = data.status;
    }
    if (data.message != null) {
      msg = msg == null ? data.statusText : msg + '\n' + data.statusText;
    }
    // if (data.error != null) {
    //   let errors: string = '';
    //   let errs:Map<string, string[]> = data.error['errors'];
    //   errs.forEach((v, k) => {
    //     errors += '\n' + v;
    //   });
    //   msg = msg == null ? errors : msg + '\n' + errors;
    // }
    return msg;
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
          this.username=null;
          this.email=null;
          this.password=null;
          this.cpassword=null;
          this.fname=null;
          this.lname=null;
          this.contactno=null;
          this.birthday=null;
          this.gender=null;
          this.router.navigate(["/login"]);
        },
        error => {
          console.log(error);
         console.log(error['error']['message']);
         console.log(error['error']['error']);
        this.errormsg=error['error']['errors'];
        
          alert(this.errormsg);
        }
      );
     
    } 
  
}
