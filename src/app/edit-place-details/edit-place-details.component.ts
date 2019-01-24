import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';


@Component({
  selector: 'app-edit-place-details',
  templateUrl: './edit-place-details.component.html',
  styleUrls: ['./edit-place-details.component.scss']
})
export class EditPlaceDetailsComponent implements OnInit {
  institute_category_places;
  title:string;
  description:string;
  image:string;


  constructor(private http:HttpClient) { }

  ngOnInit() {
    let httpHeaders = new HttpHeaders({
      Authorization: "Bearer " + localStorage.getItem("access_token")
    });
   this.http.post('http://127.0.0.1:8000/api/article/get',{},{
   headers: httpHeaders
    }).subscribe(
   data=>{
     console.log(data['access_token']);
   console.log(data);
   this.  institute_category_places=data; 
  
})
  }

}
