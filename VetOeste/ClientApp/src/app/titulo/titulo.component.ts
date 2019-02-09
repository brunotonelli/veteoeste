import { Component, Input } from '@angular/core';

@Component({
  selector: 'titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.scss']
})


export class TituloComponent {
  
  @Input() public titulo: string;
  @Input() public imagen: string;

  constructor() {
    
  }

}
