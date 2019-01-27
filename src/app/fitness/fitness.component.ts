import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fitness',
  templateUrl: './fitness.component.html',
  styleUrls: ['./fitness.component.scss']
})
export class FitnessComponent implements OnInit {
  searchResults: any;
  search_query:any;

  public form = {
    location: null,
  }
  institutecategoryplace;
  location: string;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    
  }

  onSubmit() {
    console.log(this.search_query)
    return this.http.post('http://localhost:8000/api/place/search', {
      'search_query': this.search_query
    }).subscribe(
      data => {
        this.searchResults = data;
        this.institutecategoryplace = data;
        console.log(data);
      }
    )
  }

  localImageUrl(str: string): string {
    return 'http://localhost:8000' + str.substring(16, str.length)
  }


}
