import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from "@angular/router";
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-admin-sign-up',
  templateUrl: './admin-sign-up.component.html',
  styleUrls: ['./admin-sign-up.component.scss']
})
export class AdminSignUpComponent implements OnInit {
  validatingForm: FormGroup;
  public form ={
    username:null,
    email:null,
    password:null,
    cpassword:null,
  }
  users;
  id:number;
  username:string;
    email:string;
    password:string;
    cpassword:string;

  constructor(private http:HttpClient, private router:Router,private fb: FormBuilder) { 
    this.validatingForm = fb.group({
      'minlength': [null, Validators.required, Validators.minLength(3)],
      'maxlength': [null, Validators.maxLength(5)],
      'min': [null, Validators.min(10)],
      'email': [null, [Validators.required, Validators.email]],
    });

  }

  ngOnInit() {
  }

  onSubmit() {
 
    let input = new FormData();
    input.append('name',this.username);
    input.append('email',this.email);
    input.append('password',this.password);
    input.append('confirm_password',this.cpassword);
      return this.http.post('http://127.0.0.1:8000/api/admin',input).subscribe(
        data => {
          this.users = data;
          console.log(data);
          this.username=null;
          this.email=null;
          this.password=null;
          this.cpassword=null;
        },
    error => console.log(error)
      );
     
    } 

    onSignUp() {
 
      let input = new FormData();
      input.append('user_type',"admin");
      input.append('name',this.username);
      input.append('email',this.email);
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
