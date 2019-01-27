import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-edit-place-details',
  templateUrl: './edit-place-details.component.html',
  styleUrls: ['./edit-place-details.component.scss']
})
export class EditPlaceDetailsComponent implements OnInit {
  institute_category_places: any;
  title: string;
  description: string;
  image: string;


  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.post('http://127.0.0.1:8000/api/place/get', {
      'only_owned': 1
    }, {
        headers: {
          'Authorization': "Bearer " + localStorage.getItem("access_token")
        }
      }).subscribe(
        data => {
          console.log(data);
          this.institute_category_places = data;

        },
        error => {
          console.log(error)
        })
  }

  

}
