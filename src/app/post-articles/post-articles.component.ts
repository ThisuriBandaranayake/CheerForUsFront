import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Location } from '@angular/common';
import {ArticlePostingService} from '../article-posting.service';
import { forEach } from '@angular/router/src/utils/collection';
//import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-post-articles',
  templateUrl: './post-articles.component.html',
  styleUrls: ['./post-articles.component.scss']
})
export class PostArticlesComponent implements OnInit {
  model:any={};
  
  public form ={
    caption:null,
    img:null,
    description:null,
  
   
  }
  admin_articles;
  error:null;
  caption:string;
  description:string;
  img:any;
  id:number;
  imageUrl : string = "assets/images/upload.png";
  fileToUpload : File = null;
  constructor(private http: HttpClient,
    private location: Location
    ) { }

  ngOnInit() {
this.http.get('http://localhost:8000/api/articles').subscribe(data=>{
  console.log(data);
  this.admin_articles=data;
})
  }
handleFileInput(file : FileList){
this.fileToUpload = file.item(0);

//show image preview
var reader = new FileReader();
reader.onload=(event:any)=>{
this.imageUrl=event.target.result;
}
reader.readAsDataURL(this.fileToUpload);
}


onSubmit() {
 
  let input = new FormData();
input.append('caption',this.caption);
input.append('img',this.imageUrl);
input.append('description',this.description);
  return this.http.post('http://localhost:8000/api/articleStore',input).subscribe(
    data => {
      this.admin_articles = data;
      this.caption=null;
      this.imageUrl="assets/images/upload.png";
      this.description=null;
    },
error => console.log(error)
  );
 
} 

// goBack(): void {
//   this.location.back();
// }


delete(id){
var response = confirm("Are you sure you want to delete this article?");

if(response == true){
  this.http.get('http://localhost:8000/api/deleteArticles/'+id).subscribe(response =>{
console.log(response);

  })
  this.http.get('http://localhost:8000/api/articles').subscribe(data=>{
  console.log(data);
  this.admin_articles=data;
})
}
else{
}
}


}
