import { Component, OnInit } from '@angular/core';
//import { WOW } from 'wowjs/dist/wow.min';
//import { ParallaxDirective } '../parallax.directive';
import { ParticlesModule } from 'angular-particle';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit { 
  particlesJS: any;
  constructor() { }

  ngOnInit() {

   // this.particlesJS.load('particles-js', 'particles.json', null);
   // this.datajarallax = {"speed": 0.2};
  }

  // ngAfterViewInit() {
  //   new WOW().init();
    
  // }
  

}



