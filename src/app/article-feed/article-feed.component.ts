import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
@Component({
  selector: 'app-article-feed',
  templateUrl: './article-feed.component.html',
  styleUrls: ['./article-feed.component.scss']
})
export class ArticleFeedComponent implements OnInit {
  articles;
  title:string;
  description:string;
  img:string;
  searchArticle:string;
  constructor(private http: HttpClient) { }

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
  search(){
    this.http.post('http://127.0.0.1:8000/api/article/search',this.searchArticle,{}).subscribe(
      data=>{
        console.log(data);
        this.articles=data;
      }
    );
  }


}
