import { Component } from '@angular/core';
import { EmailService } from '../servicios/email-service.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'turno',
  templateUrl: './turno.component.html',
  styleUrls: ['./turno.component.scss'],
  providers: [EmailService]
})

export class TurnoComponent {
  turnoForm: FormGroup;
  submitted = false;

  ngOnInit() {
    this.turnoForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      mascota: [''],
      email: ['', [Validators.required, Validators.email]],
      fecha: [''],
      mensaje: ['']
    });
  }

  constructor(private emailService: EmailService, private formBuilder: FormBuilder) {

  }

  get formData() { return this.turnoForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.turnoForm.invalid) {
      return false;
    }
    this.emailService.postTurno(this.turnoForm.value);
    alert("Turno envíado con éxito.");
  }

}
