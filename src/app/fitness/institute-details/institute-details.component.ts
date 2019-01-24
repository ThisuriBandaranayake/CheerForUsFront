import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-institute-details',
  templateUrl: './institute-details.component.html',
  styleUrls: ['./institute-details.component.scss']
})
export class InstituteDetailsComponent implements OnInit {
  searchResults: any;
  search_query:any;

  
  institutecategoryplace;
  location: string;
  constructor() { }

  ngOnInit() {
  }
  localImageUrl(str: string): string {
    return 'http://localhost:8000' + str.substring(16, str.length)
  }
}
