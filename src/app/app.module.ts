import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD
import { FeedpageComponent } from './feedpage/feedpage.component';
=======
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
>>>>>>> fdb7574ecf215b85f75b0e1deb8b340d673ec6b7

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
<<<<<<< HEAD
    FeedpageComponent
=======
    NavbarComponent
>>>>>>> fdb7574ecf215b85f75b0e1deb8b340d673ec6b7
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
