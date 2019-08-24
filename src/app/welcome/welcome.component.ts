import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AboutDataService } from '../service/data/about-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  aboutMessageFromService: String;

  constructor(
    private route: ActivatedRoute,
    private service: AboutDataService
  ) { }

  ngOnInit() {
  }

  getAbout() {
    console.log(this.service.executepostingMethodBeanService());

    this.service.executepostingMethodBeanService().subscribe(
     response =>  this.handleSuccessfulResponse(response)
    );

    console.log('last line');
  }


  // tslint:disable-next-line: ban-types
  handleSuccessfulResponse(response: Object) {
    this.aboutMessageFromService= response.message;
  }
}
 

