import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { HttpHeaders } from "@angular/common/http";
@Component({
  selector: 'app-institute',
  templateUrl: './institute.component.html',
  styleUrls: ['./institute.component.scss']
})
export class InstituteComponent implements OnInit {

  constructor(private http: HttpClient) { }
  details: string;
  package: string;
  customer_packages: any;
  errorData: any;
  errormsg:any;
  successMsg:any;
  ngOnInit() {

    let input = new FormData();
    input.append('id', '2');
    this.http.post('http://127.0.0.1:8000/api/place/get', input).subscribe(
      data => {
        console.log(data);
        console.log(data['places']['data']['0'].customer_packages);

        this.customer_packages = data['places']['data']['0'].customer_packages;
      })
  }

  register() {
    let httpHeaders = new HttpHeaders({
      Authorization: "Bearer " + localStorage.getItem("access_token")
    });
    return this.http.post("http://127.0.0.1:8000/api/customer/subscription/create", { 'customer_package_id': 2 }, {
      headers: httpHeaders
    })
      .subscribe(
        data => {
          console.log(data);
          this.successMsg=data['message'];
          alert(this.successMsg);
        },
        error => {
          try {
            console.log(error);
            this.errormsg=error['error']['message'];
            alert(this.errormsg);

            // alert(this.errormsg2);
            // alert(this.errormsg3);
          } catch (e) { }
        }
      );
  }

  

  
}
