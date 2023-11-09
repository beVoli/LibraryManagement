import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthComponent } from './auth/auth.component';
import { AuthLoginComponent } from './auth/auth-login/auth-login.component';
import { AuthSignupComponent } from './auth/auth-signup/auth-signup.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { SideNavigationComponent } from './home/side-navigation/side-navigation.component';
import { MainNavigationComponent } from './home/main-navigation/main-navigation.component';
import { MainPanelComponent } from './home/main-panel/main-panel.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthLoginComponent,
    AuthComponent,
    AuthSignupComponent,
    HomeComponent,
    SideNavigationComponent,
    MainNavigationComponent,
    MainPanelComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
