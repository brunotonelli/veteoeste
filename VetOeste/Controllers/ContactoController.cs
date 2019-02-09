using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Mail;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Web;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Vet.Controllers
{
    [Route("api/[controller]")]
    public class ContactoController : Controller
    {
        [HttpPost]
        [Route("contacto")]
        public HttpStatusCode EnviarContacto([FromBody]MensajeModel mensaje) {
            var fromAddress = new MailAddress("veteoeste@gmail.com", "[CVO] Contacto");
            var toAddress = new MailAddress("veteoeste@gmail.com", "Clínica Veterinaria del Oeste");
            string fromPassword = "Capadocia253";
            string subject = "[CVO] Mensaje Web de " + mensaje.Nombre;
            string body = GenerarEmailContacto(mensaje);

            var smtp = new SmtpClient
            {
                Host = "smtp.gmail.com",
                Port = 587,
                EnableSsl = true,
                DeliveryMethod = SmtpDeliveryMethod.Network,
                UseDefaultCredentials = false,
                Credentials = new NetworkCredential(fromAddress.Address, fromPassword)
            };

            var message = new MailMessage(fromAddress, toAddress)
            {
                Subject = subject,
                Body = body,
                IsBodyHtml = true
            };
            smtp.Send(message);
            return HttpStatusCode.OK;
        }

        [HttpPost]
        [Route("turno")]
        public HttpStatusCode EnviarTurno([FromBody]TurnoModel turno) {
            var fromAddress = new MailAddress("veteoeste@gmail.com", "[CVO] Turno");
            var toAddress = new MailAddress("veteoeste@gmail.com", "Clínica Veterinaria del Oeste");
            string fromPassword = "Capadocia253";
            string subject = "[CVO] Pedido de Turno de " + turno.Nombre;
            string body = GenerarEmailTurno(turno);

            var smtp = new SmtpClient
            {
                Host = "smtp.gmail.com",
                Port = 587,
                EnableSsl = true,
                DeliveryMethod = SmtpDeliveryMethod.Network,
                UseDefaultCredentials = false,
                Credentials = new NetworkCredential(fromAddress.Address, fromPassword)
            };

            var message = new MailMessage(fromAddress, toAddress)
            {
                Subject = subject,
                Body = body,
                IsBodyHtml = true
            };
            smtp.Send(message);
            return HttpStatusCode.OK;
        }

        private string GenerarEmailContacto(MensajeModel mensaje) {
            var time = DateTime.Now;
            string estilo = "<head><style>p { font-size: 16px; }</style></head>";
            string body = estilo + "<body>";
            body += "<b>Nombre:</b> " + mensaje.Nombre + "<br/>";
            body += "<b>Mascota:</b> " + mensaje.Mascota + "<br/>";
            body += "<b>Teléfono:</b> " + mensaje.Telefono + "<br/>"; ;
            body += "<b>Email:</b> " + mensaje.Email + "<br/>";
            body += "<b>Mensaje:</b>";
            body += "<p>" + mensaje.Consulta + "</p>";
            body += "<hr/><i>Mensaje envíado el " + time.ToShortDateString() + " a las " + time.ToShortTimeString()+"</i><br/>";
            body += "<i>Clínica Veterinaria del Oeste - Contacto</i>";
            body += "</body>";
            return body;
        }

        private string GenerarEmailTurno(TurnoModel turno) {
            var time = DateTime.Now;
            string estilo = "<head><style>p { font-size: 16px; }</style></head>";
            string body = estilo + "<body>";
            body += "<b>Nombre:</b> " + turno.Nombre + "<br/>";
            body += "<b>Mascota:</b> " + turno.Mascota + "<br/>";
            body += "<b>Email:</b> " + turno.Email + "<br/>";
            body += "<b>Fecha deseada:</b> " + turno.Fecha + "<br/>";
            body += "<b>Mensaje:</b>";
            body += "<p>" + turno.Mensaje + "</p>";
            body += "<hr/><i>Mensaje envíado el " + time.ToShortDateString() + " a las " + time.ToShortTimeString() + "</i><br/>";
            body += "<i>Clínica Veterinaria del Oeste - Turnos</i>";
            body += "</body>";
            return body;
        }
    }

    public class MensajeModel
    {
        public string Nombre { get; set; }
        public string Mascota { get; set; }
        public string Email { get; set; }
        public string Telefono { get; set; }
        public string Consulta { get; set; }
    }

    public class TurnoModel
    {
        public string Nombre { get; set; }
        public string Mascota { get; set; }
        public string Email { get; set; }
        public string Mensaje { get; set; }
        public string Fecha { get; set; }
    }

}
