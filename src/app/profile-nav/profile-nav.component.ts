import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-profile-nav',
  templateUrl: './profile-nav.component.html',
  styleUrls: ['./profile-nav.component.scss']
})
export class ProfileNavComponent implements OnInit {

  public form={
    category:null,
    }
    category;
    location:string;
      constructor(private http:HttpClient) { }

  ngOnInit() {
  }
  onSubmit(){
    return this.http.post('http://127.0.0.1:8000/api/place/search',this.category).subscribe(
      data=>{
        this.category=data;
        console.log(data);
      }
        
    )
  }

}


 
  
  
