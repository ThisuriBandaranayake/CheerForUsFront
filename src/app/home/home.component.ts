import { Component, OnInit } from '@angular/core';
import { WOW } from 'wowjs/dist/wow.min';
//import { ParallaxDirective } '../parallax.directive';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit { 
  
  constructor() { }

  ngOnInit() {
   // this.datajarallax = {"speed": 0.2};
  }

  ngAfterViewInit() {
    new WOW().init();
    
  }
  

}



