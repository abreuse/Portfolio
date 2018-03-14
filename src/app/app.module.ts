import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { AppRoutingModule } from './/app-routing.module';
import { CvService } from './services/cv.service';
import { CvComponent } from './cv/cv.component';
import { PresentationComponent } from './presentation/presentation.component';
import { NetworksComponent } from './networks/networks.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    ProjectsComponent,
    CvComponent,
    PresentationComponent,
    NetworksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ CvService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
