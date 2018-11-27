import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ForumComponent } from './forum.component';
//import { AuthModule } from './auth/auth.component';
import { HomeModule } from './forumhome/home.module';
import {
  //FooterComponent,
  //HeaderComponent,
  SharedModule
} from './shared';
//import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [ForumComponent, /*FooterComponent, HeaderComponent*/],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    HomeModule,
   //AuthModule,
    //AppRoutingModule
  ],
  providers: [],
  bootstrap: [ForumComponent]
})
export class AppModule {}
