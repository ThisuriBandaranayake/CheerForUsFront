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
  imageUrl : string = "assets/images/upload.jpg";
  fileToUpload : File = null;

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
    
    
    return this.http.get('http://localhost:8000/api/articleDetails/'+id).subscribe(
      data =>{
     
      this.admin_articles=data;
      //console.log(data);
      //this.admin_articles=this.admin_articles[0];
      this.admin_articles.id=id;    
      this.caption= this.admin_articles.caption;
      this.img= this.admin_articles.img;
      this.description=this.admin_articles.description;    
     },
     error => console.log(error)
     );
    //this.getDetails(id);
   }

   getDetails(id){
  

    return this.http.get('http://localhost:8000/api/articleDetails/'+id).subscribe(
      data =>{
     
      this.admin_articles=data;
      console.log(data);
      //this.admin_articles=this.admin_articles[0];
      this.admin_articles.id=id;    
    this.caption= "Hell"; //this.admin_articles.caption;
     this.img= this.admin_articles.img;
      this.description=this.admin_articles.description;
    
     });
  }
}
