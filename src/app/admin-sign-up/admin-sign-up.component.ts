import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from "@angular/router";
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-admin-sign-up',
  templateUrl: './admin-sign-up.component.html',
  styleUrls: ['./admin-sign-up.component.scss']
})
export class AdminSignUpComponent implements OnInit {
  validatingForm: FormGroup;
  form = new FormGroup({
    uname: new FormControl('', [Validators.required, Validators.minLength(3)]),
    mail: new FormControl('', [Validators.required, Validators.email]),
    pword: new FormControl('', [Validators.minLength(6), Validators.required]),
    cpword: new FormControl('', [Validators.required, Validators.minLength(6)]),

  });

  get uname() {
    return this.form.get("uname");
  }
  get mail() {
    return this.form.get("mail");
  }
  get pword() {
    return this.form.get("pword");
  }
  get cpword() {
    return this.form.get("cpword");
  }
  // public form ={
  //   username:null,
  //   email:null,
  //   password:null,
  //   cpassword:null,
  // }
  users;
  id: number;
  username: string;
  email: string;
  password: string;
  cpassword: string;

  constructor(private http: HttpClient, private router: Router, private fb: FormBuilder) {


  }

  ngOnInit() {

  }

  onSignUp() {

    let input = new FormData();
    input.append('user_type', "admin");
    input.append('name', this.username);
    input.append('email', this.email);
    input.append('password', this.password);
    input.append('confirm_password', this.cpassword);
    console.log(localStorage.getItem('access_token'));
    return this.http.post('http://localhost:8000/api/user/signup', input, { headers: { 'Authorization': 'Bearer ' + localStorage.getItem('access_token') } }).subscribe(
      data => {
        this.users = data;
        console.log(data);
        this.username = null;
        this.email = null;
        this.password = null;
        this.cpassword = null;
        this.router.navigate(["/login"]);
      },
      error => {
        console.log(error);
        console.log(error['error']['message']);
        console.log(error['error']['error']);
        // this.errormsg=error['error']['error'];
        alert(this.getDialogMessage(error));
      }
    );

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

}
