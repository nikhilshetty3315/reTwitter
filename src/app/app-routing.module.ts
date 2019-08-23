import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FeedpageComponent } from './feedpage/feedpage.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { LogoutComponent } from './logout/logout.component';
<<<<<<< HEAD
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  {path: 'signup', component: SignupComponent},
  { path: 'feedpage', component: FeedpageComponent },
  { path: 'welcome', component: WelcomeComponent },
=======
import { RouteGuardService } from './service/route-guard.service';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent},
  { path: 'feedpage', component: FeedpageComponent, canActivate: [RouteGuardService]},
  { path: 'welcome', component: WelcomeComponent, canActivate: [RouteGuardService] },
>>>>>>> 5e0f186affa49ef04d054bf39dcc141631dc4134
  { path: 'logout', component: LogoutComponent},
  { path: '**', component: ErrorpageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }