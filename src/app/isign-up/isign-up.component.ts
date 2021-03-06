import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from "@angular/router";

@Component({
  selector: 'app-isign-up',
  templateUrl: './isign-up.component.html',
  styleUrls: ['./isign-up.component.scss']
})
export class ISignUpComponent implements OnInit {
  public form ={
    name:null,
    email:null,
    address1:null,
    address2:null,
    password:null,
    cpassword:null,
    city:null,
    tpno:null,
    postalCode:null,
    province:null,
    username:null,
    country:null,
  }
  errorData:any;
  errormsg:string;
  users;
  id:number;
  name:string;
    email:string;
    address1:string;
    address2:string;
    password:string;
    cpassword:string;
    city:string;
    tpno:string;
    postalCode:string;
    province:string;
    username:string;
    error:null;
    country:string;

  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit() {
  }



onSignUp(){
  let input=new FormData();
 // input.append('name',this.username);
 input.append('name',this.username)
  input.append('institute_name',this.name);
  input.append('email',this.email);
  input.append('address_line1',this.address1);
  input.append('address_line2',this.address2);
  input.append('country','Sri Lanka');
  input.append('city',this.city);
  input.append('user_type',"institute");
  input.append('latitude','1');
  input.append('longitude','1');
  input.append('country',"Sri Lanka");
  input.append('province',this.province);
  input.append('tpnumber',this.tpno);
  input.append('postal_code',this.postalCode);
  input.append('password',this.password);
  input.append('confirm_password',this.cpassword);
  input.append('latitude', '0.0');
  input.append('longitude', '0.0');
  return this.http.post('http://127.0.0.1:8000/api/user/signup',input).subscribe(
    data=>{
      this.users=data;
      console.log(data);
      this.name=null;
      this.email=null;
      this.address1=null;
      this.address2=null;
      this.password=null;
      this.cpassword=null;
      this.city=null;
      this.province=null;
      this.postalCode=null;
      this.tpno=null;
      this.username=null;
      this.router.navigate(["/login"]);
    },
    error => {
      this.errorData = error;
        
        // console.log(error.error.errors.email);
        // console.log(error.error.errors.city);
        // console.log(error.error.errors.province);
        // console.log(error.error.errors.name);
        // console.log(error.error.errors.institute_name);
        // console.log(error.error.errors.address_line1);
        // console.log(error.error.errors.address_line2);
        // console.log(error.error.errors.postal_code);
        // console.log(error.error.errors.phone_number);
        // console.log(error.error.errors.password);
        // console.log(error.error.errors.confirm_password);
        
        
        console.log(error.error.message);
        this.errormsg=error['error']['message'];
        alert(this.errormsg);
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
