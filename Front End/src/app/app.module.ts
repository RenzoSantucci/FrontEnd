import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { LogoYPComponent } from './componentes/logo-yp/logo-yp.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import {FormsModule} from '@angular/forms';
import { interceptorProvider } from './servicios/interceptor-service';
import { NewExperienciaComponent } from './componentes/experiencia/new-experiencia.component';
import { NeweducacionComponent } from './componentes/educacion/neweducacion.component';
import { NewSkillComponent } from './componentes/soft-and-hard-skills/new-skill.component';
import { SoftAndHardSkillsComponent } from './componentes/soft-and-hard-skills/soft-and-hard-skills.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoYPComponent,
    BannerComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    SoftAndHardSkillsComponent,
    EducacionComponent,
    ProyectosComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NewExperienciaComponent,
    NeweducacionComponent,
    NewSkillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgCircleProgressModule.forRoot(),
    HttpClientModule
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
