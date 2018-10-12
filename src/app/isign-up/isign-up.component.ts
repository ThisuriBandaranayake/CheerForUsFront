import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

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
  }

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
    error:null;

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }

onSubmit(){
  let input=new FormData();
  input.append('name',this.name);
  input.append('email',this.email);
  input.append('address_line1',this.address1);
  input.append('address_line2',this.address2);
  input.append('city',this.city);
  input.append('province',this.province);
  input.append('tpnumber',this.tpno);
  input.append('postal_code',this.postalCode);
  input.append('password',this.password);
  input.append('confirm_password',this.cpassword);
  return this.http.post('http://127.0.0.1:8000/api/institute',input).subscribe(
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
    },
    error=>{
      console.log(error);
    }
  );
}

}
