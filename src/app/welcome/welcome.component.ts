import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AboutDataService } from '../service/data/about-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private service: AboutDataService
  ) { }

  ngOnInit() {
  }
  getAbout() {
    this.service.executepostingMethodBeanService();
  }
}


