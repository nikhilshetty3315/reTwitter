import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppRoutingModule } from './app-routing.module';
import { FeedpageComponent } from './feedpage/feedpage.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FeedpageComponent,
    WelcomeComponent,
    ErrorpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
