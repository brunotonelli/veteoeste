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
        this.ocultarNav();
        if (window.outerWidth <= 992 && this.router.url != '/')
          this.scrollearTitulo();
        else
          window.scrollTo(0, 0);
      }
    });
  }

  ocultarNav() {
    if ($('#navbarNavDropdown').css('display') != 'none' &&
      $('.navbar-toggler').css('display') != 'none') {
      $('.navbar-toggler').trigger("click");
    }
  }

  scrollearTitulo() {
    $([document.documentElement, document.body]).animate({
      scrollTop: $('#top-offset-scroll').offset().top
    }, 0);
  }
}
