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
    return this.http.get('http://localhost:8080/retwitter-Bean');
      }
}

