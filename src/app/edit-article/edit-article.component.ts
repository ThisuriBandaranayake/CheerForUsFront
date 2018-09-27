import { Component, OnInit } from '@angular/core';
import { PostArticlesComponent } from '../post-articles/post-articles.component';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.scss']
})
export class EditArticleComponent implements OnInit {

  admin_articles;
  admin_article;
  error:null;
  caption:string;
  description:string;
  img:any;
  id:number;
  imageUrl : string = "assets/images/upload.jpg";
  fileToUpload : File = null;

  constructor( private http:HttpClient) { }

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
    this.getDetails(this.id);
   }


   getDetails(id){
    return this.http.get('http://localhost:8000/api/articleDetails/'+id).subscribe(data =>{
      console.log(data);
      this.admin_articles=data;
      // this.admin_article=this.admin_article[0];
      // this.admin_article.id=id;
      // this.admin_article.caption=this.caption;
      // this.admin_article.description=this.description;
     })
  }
}
