import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { LogoYPComponent } from './componentes/logo-yp/logo-yp.component';
import { RedesSocComponent } from './componentes/redes-soc/redes-soc.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { SoftAndHardSkillsComponent } from './componentes/soft-and-hard-skills/soft-and-hard-skills.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { FooterComponent } from './componentes/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoYPComponent,
    RedesSocComponent,
    BannerComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    SoftAndHardSkillsComponent,
    ProyectosComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
