import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username: string, password: string) {
    if (username === 'admin' && password === 'admin') {
      return true;
  }
    return false;
  }
}

