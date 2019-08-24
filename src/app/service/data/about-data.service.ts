import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



// tslint:disable-next-line: class-name
export class postingMethodBean {
  // tslint:disable-next-line: ban-types
  constructor(public message: String) {}
}

@Injectable({
  providedIn: 'root'
})
export class AboutDataService {

  constructor(
    private http: HttpClient
  ) { }

  executepostingMethodBeanService() {
    return this.http.get<postingMethodBean>('http://localhost:8080/retwitter-Bean');
      }
}

