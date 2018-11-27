import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-fitness',
  templateUrl: './fitness.component.html',
  styleUrls: ['./fitness.component.scss']
})
export class FitnessComponent implements OnInit {
public form={
location:null,
}
institutecategoryplace;
location:string;
  constructor(private http:HttpClient) { }

  ngOnInit() {
  }

  onSubmit(){
return this.http.post('http://127.0.0.1:8000/api/place/search',location).subscribe(
  data=>{
    this.institutecategoryplace=data;
    console.log(data);
  }
  
) 
  }
  

}
