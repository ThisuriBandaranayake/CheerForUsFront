import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import {AuthService} from '../auth.service';
@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.scss']
})
export class AdminEditComponent implements OnInit {
  public form ={
    id:null,
    username:null,
    email:null,
    fname:null,
    lname:null,
    contactno:null,
    birthday:null,
    gender:null,
    image:null,
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
  
  image:string;
  imageUrl : string = "assets/images/avatar.png";
  fileToUpload:File;
  constructor(private auth:AuthService,private http: HttpClient,private router: Router) { }

  handleFileInput(file : FileList){
    this.fileToUpload = file.item(0);
    
    //show image preview
    var reader = new FileReader();
    reader.onload=(event:any)=>{
    this.imageUrl=event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
    }

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
         this.username=response['body']['name']; 
          this.fname= response['body']['first_name'];
          this.lname= response['body']['last_name'];
          this.gender= response['body']['gender'];
          this.email= response['body']['email'];
          this.contactnumber= response['body']['phone_number']; 
          this.birthday= response['body']['birthday'];
          this.imageUrl=response['body']['avatar'];
         this.image=response['body']['avatar'];
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
 // input.append('change_avatar',this.image);
  input.append('avatar',this.fileToUpload);
  input.append('change_avatar','1');
  
    return this.http.post("http://localhost:8000/api/user/edit",input,{
      headers: httpHeaders
    }).subscribe(
    data=>{
      this.user=data;
      console.log(data);
      this.router.navigate(["/admin-dashboard"]);
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
