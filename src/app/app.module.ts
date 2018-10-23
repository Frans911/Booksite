import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IntroComponent } from './components/intro/intro.component';
import { FormComponent } from './components/form/form.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EventComponent } from './components/event/event.component';
import { ViewComponent } from './components/view/view.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';

import { routes } from './app.routes.module'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    FormComponent,
    HomeComponent,
    NavbarComponent,
    EventComponent,
    ViewComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
