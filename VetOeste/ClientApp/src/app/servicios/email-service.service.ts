import { Injectable } from "@angular/core"
import { Http, Headers } from "@angular/http"


@Injectable()
export class EmailService {
  constructor(private http: Http) {

  }

  postContacto(data) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    var model = {
      "Nombre": data.nombre,
      "Mascota": data.mascota,
      "Email": data.email,
      "Telefono": data.telefono,
      "Consulta": data.consulta
    };

    return this.http.post('api/contacto/contacto', model, { headers: headers })
      .subscribe(res => console.log(res.json()));
  }

  postTurno(data) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    var model = {
      "Nombre": data.nombre,
      "Mascota": data.mascota,
      "Email": data.email,
      "Mensaje": data.mensaje,
      "Fecha": data.fecha
    };

    return this.http.post('api/contacto/turno', model, { headers: headers })
      .subscribe(res => console.log(res.json()));
  }
}
