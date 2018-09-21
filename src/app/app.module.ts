import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';
import { PostComponent } from './post/post.component';
import { PoatArticlesComponent } from './poat-articles/poat-articles.component';
import { PostArticlesComponent } from './post-articles/post-articles.component';
import { ArticleFeedComponent } from './article-feed/article-feed.component';
import { NavComponent } from './nav/nav.component';
@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    PostComponent,
    PoatArticlesComponent,
    PostArticlesComponent,
    ArticleFeedComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    RouterModule.forRoot([
      {
        path:'nav',
        component:NavComponent
      },
      {
        path:'add',
        component:AddComponent
      },
      {
        path:'post-articles',
        component:PostArticlesComponent
      },
      {
        path:'article-feed',
        component:ArticleFeedComponent
      },
    ])
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
