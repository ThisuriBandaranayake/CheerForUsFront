import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from "@angular/router";
import { AuthService } from '../auth.service';
import { stringify } from '@angular/core/src/util';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  //  public form={
  //     email:null,
  //     password:null,
  //   }
  email;
  password;
  response: string;
  error: string;
  //   users;
  //     id:number;
  //     email:string;
  //     password:string;
  // response :string;
  elegantForm: FormGroup;
  constructor(public fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({

      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

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
          this.router.navigate(["/idashboard"]);
        }
        //alert(this.getDialogMessage(response));
        console.log(response);
      },
      error => {
        console.log(error);
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