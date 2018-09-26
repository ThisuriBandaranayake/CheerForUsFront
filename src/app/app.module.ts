import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';

import { PostArticlesComponent } from './post-articles/post-articles.component';
import { ArticleFeedComponent } from './article-feed/article-feed.component';
import { NavComponent } from './nav/nav.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

import { AdminDetailsComponent } from './admin-details/admin-details.component';
import {ArticlePostingService} from './article-posting.service';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
   
    PostArticlesComponent,
    ArticleFeedComponent,
    NavComponent,
    AdminDashboardComponent,
   
    AdminDetailsComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    RouterModule.forRoot([
     
      {
        path:'profile',
        component:ProfileComponent

      },
      {
        path:'admin-details',
        component:AdminDetailsComponent

      },
      {
        path:'admin-dashboard',
        component:AdminDashboardComponent

      },
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
  providers: [ArticlePostingService],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
