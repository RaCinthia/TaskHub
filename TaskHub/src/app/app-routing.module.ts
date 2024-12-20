import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { Login2Component } from './pages/login2/login2.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import path from 'path';

const routes: Routes = [
  {path: "", redirectTo:"landing-page", pathMatch: "full"},
  {path: "landing-page", component: LandingPageComponent},
  {path: "login", component: LoginComponent},
  {path: "login2", component: Login2Component},
  {path: "home", component: HomePageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
