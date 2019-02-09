import { Component, Input } from '@angular/core';

@Component({
  selector: 'infografia',
  templateUrl: './infografia.component.html',
  styleUrls: ['./infografia.component.scss']
})
export class InfografiaComponent {

  @Input() public titulo: string;
  @Input() public archivo: string;

  constructor() {

  }

}
