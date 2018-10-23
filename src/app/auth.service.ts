import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  sendLoginRequest(email: string, password: string) {
    let httpHeaders = new HttpHeaders({
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest"
    });
    let body = {
      email: email,
      password: password
    };
    return this.http.post(
      "http://127.0.0.1:8000/api/user/login",
      body,
      {
        observe: "response",
        headers: httpHeaders
      }
    );
  }

  getUserDetails(accessToken: string) {
    let httpHeaders = new HttpHeaders({
      Authorization: "Bearer " + accessToken
    });
    console.log(accessToken);
    return this.http.get(
      "http://127.0.0.1:8000/api/user/details",
      {
        observe: "response",
        headers: httpHeaders
      }
    );
  }
}
