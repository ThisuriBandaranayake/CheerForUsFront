import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ArticlePostingService {
  admin_articles;
  error:null;
  caption:string;
  description:string;
  img:any;
  id:number;
  
  constructor(private http: HttpClient) { }

  
}
 