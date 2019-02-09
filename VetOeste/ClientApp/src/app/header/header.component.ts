import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {

  closeResult: string;

  constructor(private router: Router, private modalService: NgbModal) { }

  scrollTurno() {
    this.router.navigateByUrl('/').then(function () {
      $([document.documentElement, document.body]).animate({
        scrollTop: $('#turno-home').offset().top
      }, 2000);
    });
  }

  openDatos(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  openEmail() {

  }
         
  ngAfterViewInit() {

    $('.btn-header').hover(function () {
      var img = $(this).children('img').first();
      var nombre = img.attr('src');
      var src = nombre.substr(0, nombre.length - 4) + "-sel.png";
      img.attr('src', src);
    }, function () {
      var img = $(this).children('img').first();
      var nombre = img.attr('src');
      var src = nombre.substr(0, nombre.length - 8) + ".png";
      img.attr('src', src);
      });

    $('#mapa').hover(function () {
      $(this).attr('src', 'assets/shared/maps-sel.png');
    }, function () {
      $(this).attr('src', 'assets/shared/maps.png');
    });

  }

}
