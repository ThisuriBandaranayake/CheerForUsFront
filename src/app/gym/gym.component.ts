import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-gym',
  templateUrl: './gym.component.html',
  styleUrls: ['./gym.component.scss']
})
export class GymComponent implements OnInit {

  constructor(private http: HttpClient) { }
  searchResults: any;
  search_query:any;
  institutecategoryplace;
  ngOnInit() {
    
      console.log(this.search_query)
      return this.http.post('http://localhost:8000/api/place/search', {
        'search_query': "gym"
      }).subscribe(
        data => {
          this.searchResults = data;
          this.institutecategoryplace = data;
          console.log(data);
        } 
      )
    }
  

}
