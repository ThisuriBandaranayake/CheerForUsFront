import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EventEmitterService } from '../event-emitter.service'; 
import { Router } from '@angular/router';

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
  constructor(private http: HttpClient,private eventEmitterService: EventEmitterService,private router: Router) { }

  ngOnInit() {

    
    // if (this.eventEmitterService.subsVar==undefined) {    
    //   this.eventEmitterService.subsVar = this.eventEmitterService.    
    //   invokeFirstComponentFunction.subscribe((name:string) => {    
    //     this.onSubmit2(name);    
    //   });    
    // }   
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
  onSubmit2(name:string) {
    this.router.navigate(["/fitness"]);
    console.log(this.search_query)
    return this.http.post('http://localhost:8000/api/place/search', {
      'search_query': name
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
