import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { VacancyComponent } from './pages/vacancy/vacancy.component';
import { ServicesComponent } from './pages/services/services.component';
import { EdutechComponent } from './pages/services/edutech/edutech.component';
import { AgrotechComponent } from './pages/services/agrotech/agrotech.component';
import { TechnologyComponent } from './pages/services/technology/technology.component';
import { EcommerceComponent } from './pages/services/ecommerce/ecommerce.component';
import { RoboticsComponent } from './pages/services/robotics/robotics.component';
import { ProjectsComponent } from './pages/services/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PlacementComponent } from './pages/placement/placement.component';
import { FooterComponent } from './pages/footer/footer.component';
import { PartnersComponent } from './pages/partners/partners.component';
import { AnorgTechComponent } from './pages/anorg-tech/anorg-tech.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VacancyComponent,
    ServicesComponent,
    EdutechComponent,
    AgrotechComponent,
    TechnologyComponent,
    EcommerceComponent,
    RoboticsComponent,
    ProjectsComponent,
    ContactComponent,
    PlacementComponent,
    FooterComponent,
    PartnersComponent,
    AnorgTechComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
