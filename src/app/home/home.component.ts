import { Component, OnInit, Input } from '@angular/core';
//import { WOW } from 'wowjs/dist/wow.min';
//import { ParallaxDirective } '../parallax.directive';
import { ParticlesModule } from 'angular-particle';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit { 
  imagesBasic = [
    { img: "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(117).jpg", thumb:
    "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(117).jpg", description: "Image 1" },
    { img: "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(98).jpg", thumb:
    "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(98).jpg", description: "Image 2" },
    { img: "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(131).jpg", thumb:
    "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(131).jpg", description: "Image 3" },
    { img: "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(123).jpg", thumb:
    "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(123).jpg", description: "Image 4" },
    { img: "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(118).jpg", thumb:
    "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(118).jpg", description: 'Image 5' },
    { img: "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(128).jpg", thumb:
    "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(128).jpg", description: 'Image 6' },
    { img: "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(132).jpg", thumb:
    "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(132).jpg", description: 'Image 7' },
    { img: "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(115).jpg", thumb:
    "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(115).jpg", description: 'Image 8' },
    { img: "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(133).jpg", thumb:
    "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(133).jpg", description: 'Image 9' }
    ];


    searchResults: any;
    search_query:any;
  
    public form = {
      location: null,
    }
    institutecategoryplace;
    location: string;
  particlesJS: any;
  constructor(private http: HttpClient,private router: Router) { }

  ngOnInit() {

   // this.particlesJS.load('particles-js', 'particles.json', null);
   // this.datajarallax = {"speed": 0.2};
  }

  // ngAfterViewInit() {
  //   new WOW().init();
    
  // }
  gym(){
    this.router.navigate(["/fitness"]);
   this.search_query="gym";
  }
  

}



