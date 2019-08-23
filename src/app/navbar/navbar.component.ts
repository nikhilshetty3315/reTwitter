import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 // isUserLoggedIn: boolean = false;

  constructor(public hardcodedAuthenticationService : HardcodedAuthenticationService) { }

  ngOnInit() {
   // this.isUserLoggedIn = this.hardcodedAuthenticationService.isUserLoggedIn();
  }

}
