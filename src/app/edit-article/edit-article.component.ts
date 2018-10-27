import { Component, OnInit } from '@angular/core';
import { PostArticlesComponent } from '../post-articles/post-articles.component';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Router,ActivatedRoute,Params } from "@angular/router";

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.scss']
})
export class EditArticleComponent implements OnInit {

  public form ={
    id:null,
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
  imageUrl : string = "http://localhost:8000/storage/avatars/{{img}}";
  fileToUpload : File ;

  constructor( private http:HttpClient,private route: ActivatedRoute,private router:Router,) { }

  handleFileInput(file : FileList){
    this.fileToUpload = file.item(0);
    
    //show image preview
    var reader = new FileReader();
    reader.onload=(event:any)=>{
    this.imageUrl=event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
    }

  ngOnInit() { 
    var id=this.route.snapshot.params['id'];
    
    
    return this.http.get(`http://localhost:8000/api/articleDetails/${id}`).subscribe(
      data =>{
     
      this.admin_articles=data;
      console.log(data);
      //this.admin_articles=this.admin_articles[0];
      this.admin_articles.id=data['0'].id;    
      this.caption= data['0'].caption;
      this.imageUrl= 'http://localhost:8000/storage/images/' + data['0'].img;
      this.fileToUpload= data['0'].img;
     // console.log(this.img);
      this.description= data['0'].description;  
       
     },
     error => console.log(error)
     );
    //this.getDetails(id);
   }

  
  update(){
    
  let input = new FormData();
  input.append('caption',this.caption);
  input.append('img',this.fileToUpload);
  input.append('description',this.description);
    var id=this.route.snapshot.params['id'];
    return this.http.post(`http://localhost:8000/api/updateArticle/${id}`,input).subscribe(
    data=>{
      this.admin_articles=data;
      console.log(data);
    }
    );
  }
  edit(){
    let input = new FormData();
  input.append('caption',this.caption);
  input.append('img',this.fileToUpload);
  input.append('description',this.description);
    var id=this.route.snapshot.params['id'];
    return this.http.post(`http://localhost:8000/api/update/${id}`,input).subscribe(
      data=>{
        this.admin_articles=data;
        console.log(data);
      }
      );
  }
}
