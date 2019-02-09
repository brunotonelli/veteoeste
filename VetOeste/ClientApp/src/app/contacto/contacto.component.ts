import { Component, OnInit } from '@angular/core';
import { EmailService } from '../servicios/email-service.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss'],
  providers: [EmailService]
})

export class ContactoComponent implements OnInit {
  contactoForm: FormGroup;
  submitted = false;

  ngOnInit() {
    this.contactoForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      mascota: [''],
      email: ['', [Validators.required, Validators.email]],
      telefono: [''],
      consulta: ['', Validators.required]
    });
  }

  constructor(private emailService: EmailService, private formBuilder: FormBuilder) {

  }

  get formData() { return this.contactoForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.contactoForm.invalid) {
      return false;
    }
    this.emailService.postContacto(this.contactoForm.value);
    alert("Mensaje envíado con éxito.");
  }
}
