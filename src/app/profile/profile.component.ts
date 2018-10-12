import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  avatar : string = "assets/images/avatar.png";
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get('',);
  }

}
