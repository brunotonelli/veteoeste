import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {

  constructor() { }
  
  ngAfterViewInit() {
    
    $('.slide').slick({
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 500,
      fade: true,
      cssEase: 'linear',
      arrows: false,
      focusOnSelect: false,
      pauseOnHover: false,
      pauseOnFocus: false
    });
    
    $('#cuadro').hover(function () {
      $(this).attr('src', 'assets/home/sabermas-alt.png');
    }, function () {
      $(this).attr('src', 'assets/home/sabermas.png');
      });

  }

}
