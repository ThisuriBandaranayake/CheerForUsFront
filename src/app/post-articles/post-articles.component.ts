import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Location } from '@angular/common';
import {ArticlePostingService} from '../article-posting.service';
import { forEach } from '@angular/router/src/utils/collection';
import { Router } from "@angular/router";
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
  articles;
  error:null;
  caption:string;
  description:string;
  img:string;
  id:number;
  imageUrl : string = "assets/images/upload.png";
  fileToUpload : File;
  constructor(private http: HttpClient, private location: Location,private router: Router) { }

      ngOnInit() {
        let httpHeaders = new HttpHeaders({
          Authorization: "Bearer " + localStorage.getItem("access_token")
        });
       this.http.post('http://127.0.0.1:8000/api/article/get',{},{
       headers: httpHeaders
        }).subscribe(
       data=>{
       console.log(data);
       this.articles=data; 
      
      
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


onSubmit(accessToken:string ) {
  let httpHeaders = new HttpHeaders({
    Authorization: "Bearer " + localStorage.getItem("access_token")
  });
  let input = new FormData();
  
input.append('title',this.caption);
input.append('article_photo',this.fileToUpload);
input.append('content',this.description);
input.append('is_published','0');
  return this.http.post('http://127.0.0.1:8000/api/article/create',input,{ 
    headers: httpHeaders
  }).subscribe(
    data => {
      this.articles = data;
      this.caption=null;
      this.imageUrl="assets/images/upload.png";
      this.description=null;
      
      
    },
error => console.log(error)
  );
 
} 

publish(accessToken:string ) {
  let httpHeaders = new HttpHeaders({
    Authorization: "Bearer " + localStorage.getItem("access_token")
  });
  let input = new FormData();
  
input.append('title',this.caption);
input.append('article_photo',this.fileToUpload);
input.append('content',this.description);
input.append('is_published','1');
  return this.http.post('http://127.0.0.1:8000/api/article/create',input,{
    headers: httpHeaders
  }).subscribe(
    data => {
      this.articles = data;
      this.caption=null;
      this.imageUrl="assets/images/upload.png";
      this.description=null;
      window.location.reload()
    },
error => console.log(error)

  );
  
 
} 


// goBack(): void {
//   this.location.back();
// }


delete(id){ 
  let httpHeaders = new HttpHeaders({
    Authorization: "Bearer " + localStorage.getItem("access_token")
  });
  console.log(localStorage.getItem("access_token"));
var response = confirm("Are you sure you want to delete this article?");

if(response == true){
  return this.http.post('http://localhost:8000/api/article/delete',{id},{
    headers: httpHeaders 
  }).subscribe(response =>{ 
console.log(response);
window.location.reload()

  })
 
}
else{
}
}


edit(id){
  let httpHeaders = new HttpHeaders({
    Authorization: "Bearer" + localStorage.getItem("access_token")
  }); 
  return this.http.post(`http://localhost:8000/api/article/get/${id}`,{},{
    headers: httpHeaders
  }).subscribe(data =>{
    console.log(data);
    this.articles=data;
    this.router.navigate(["/edit-article/{{article.id}}"]);
    // this.admin_article=this.admin_article[0];
    // this.admin_article.id=id;
    // this.admin_article.caption=this.caption;
    // this.admin_article.description=this.description;
   })
  }

  search(){
    
  }

  

}
