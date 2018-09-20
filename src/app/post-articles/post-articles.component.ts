import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-post-articles',
  templateUrl: './post-articles.component.html',
  styleUrls: ['./post-articles.component.scss']
})
export class PostArticlesComponent implements OnInit {
  public form ={
    caption:null,
    img:null,
    description:null,
  }
  admin_articles;
  error:null;
  caption:string;
  description:string;
  img:string;
imageUrl : string = "assets/images/t1.jpg";
fileToUpload : File = null;
  constructor(private http: HttpClient) { }

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
input.append('img',this.img);
input.append('description',this.description);
  return this.http.post('http://localhost:8000/api/articleStore',input).subscribe(
    data => {
      this.admin_articles = data;
    },
error => console.log(error)
  );
}

}
