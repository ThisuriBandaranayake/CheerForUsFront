import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders} from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 public form={
    email:null,
    password:null,
  }

  users;
    id:number;
    email:string;
    password:string;

  elegantForm: FormGroup;
  constructor(public fb: FormBuilder,private http:HttpClient) {
    this.elegantForm = fb.group({
      elegantFormEmailEx: ['', [Validators.required, Validators.email]],
      elegantFormPasswordEx: ['', Validators.required],
    });
   }

  ngOnInit() {
  }

  onSubmit(){
   let  input=new FormData;
   input.append('email',this.email);
   input.append('password',this.password);
   return this.http.post('http://127.0.0.1:8000/api/login',input).subscribe(
     data=>{
       this.users=data;
       console.log(data);
       this.email=null;
       this.password=null;
     }
   )
  }

}
