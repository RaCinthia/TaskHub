import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { MainComponent } from './componentes/main/main.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginComponent } from './pages/login/login.component';
import { Login2Component } from './pages/login2/login2.component';
import { Header2Component } from './componentes/header2/header2.component';
import { Footer2Component } from './componentes/footer2/footer2.component';
import { TemplateComponent } from './pages/template/template.component';
import { BlankComponent } from './pages/blank/blank.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    LandingPageComponent,
    HomePageComponent,
    LoginComponent,
    Login2Component,
    Header2Component,
    Footer2Component,
    TemplateComponent,
    BlankComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
