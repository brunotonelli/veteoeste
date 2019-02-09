import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(private router: Router) { }
  title = 'Clínica Veterinaria del Oeste';

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        if (window.outerWidth <= 992) {
          $([document.documentElement, document.body]).animate({
            scrollTop: $('#top-offset-scroll').offset().top
          }, 0);
        }
        else {
          window.scrollTo(0, 0);
        }
      }
    });
  }
}
