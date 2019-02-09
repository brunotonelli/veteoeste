import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule, MatNativeDateModule, MatDatepickerModule } from '@angular/material';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import * as $ from 'jquery';
import "slick-carousel";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { OncologiaComponent } from './oncologia/oncologia.component';
import { OdontologiaComponent } from './odontologia/odontologia.component';
import { CryovetComponent } from './cryovet/cryovet.component';
import { TituloComponent } from './titulo/titulo.component';
import { EspecialidadesComponent } from './especialidades/especialidades.component';
import { TurnoComponent } from './turno/turno.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CirugiaComponent } from './cirugia/cirugia.component';
import { PeluqueriaComponent } from './peluqueria/peluqueria.component';
import { VeterinariosComponent } from './veterinarios/veterinarios.component';
import { InfografiasComponent } from './infografias/infografias.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';
import { HistoriaComponent } from './historia/historia.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { FormulariosComponent } from './formularios/formularios.component';
import { InfografiaComponent } from './infografia/infografia.component';
import { EmailService } from './servicios/email-service.service';
import { ComplementariosComponent } from './complementarios/complementarios.component';
import { ExoticosComponent } from './exoticos/exoticos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    OncologiaComponent,
    OdontologiaComponent,
    CryovetComponent,
    TituloComponent,
    EspecialidadesComponent,
    TurnoComponent,
    ContactoComponent,
    CirugiaComponent,
    PeluqueriaComponent,
    VeterinariosComponent,
    InfografiasComponent,
    UbicacionComponent,
    HistoriaComponent,
    ArticulosComponent,
    FormulariosComponent,
    InfografiaComponent,
    ComplementariosComponent,
    ExoticosComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatDatepickerModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'cirugia', component: CirugiaComponent },
      { path: 'oncologia', component: OncologiaComponent },
      { path: 'odontologia', component: OdontologiaComponent },
      { path: 'cryovet', component: CryovetComponent },
      { path: 'especialidades', component: EspecialidadesComponent },
      { path: 'complementarios', component: ComplementariosComponent },
      { path: 'contacto', component: ContactoComponent },
      { path: 'peluqueria', component: PeluqueriaComponent },
      { path: 'veterinarios', component: VeterinariosComponent },
      { path: 'infografias', component: InfografiasComponent },
      { path: 'formularios', component: FormulariosComponent },
      { path: 'articulos', component: ArticulosComponent },
      { path: 'historia', component: HistoriaComponent },
      { path: 'ubicacion', component: UbicacionComponent },
      { path: 'exoticos', component: ExoticosComponent }
    ])
  ],
  providers: [EmailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
