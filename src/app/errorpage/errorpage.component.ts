import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-errorpage',
  templateUrl: './errorpage.component.html',
  styleUrls: ['./errorpage.component.css']
})
export class ErrorpageComponent implements OnInit {

  errorMessage = 'Oops !! An Error occured contact support!';

  constructor() { }

  ngOnInit() {
  }

}
