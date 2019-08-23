import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AboutDataService {

  constructor(
    private http: HttpClient
  ) { }

  executepostingMethodBeanService() {
    this.http.get();
    console.log('i\'m print');
  }
}

