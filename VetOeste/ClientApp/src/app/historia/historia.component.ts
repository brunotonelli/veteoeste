import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './historia.component.html',
  styleUrls: ['./historia.component.scss']
})
export class HistoriaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.slide').slick({
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 500,
      arrows: false,
      pauseOnHover: false,
      pauseOnFocus: false
    });
  }

}
