import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from "@angular/router";
import { stringify } from '@angular/core/src/util';
import {AuthService} from '../auth.service';
@Component({
  selector: 'app-iside-nav',
  templateUrl: './iside-nav.component.html',
  styleUrls: ['./iside-nav.component.scss']
})
export class IsideNavComponent implements OnInit {

  constructor(private http: HttpClient,private router: Router,private auth:AuthService) { }
accessToken:string;
  ngOnInit() {
  }

  
  logout(){
    this.auth.logOut(localStorage.getItem("access_token") ).subscribe
    (
      response=>{
        console.log(response);
        this.router.navigate(["/login"]);
          
      }
    );
      
    }
}
