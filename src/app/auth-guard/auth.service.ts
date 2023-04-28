import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  loggedInUser() {
    // Get loggedInUser data from localStorage
    let loggedInUserData = JSON.parse(localStorage.getItem('loggedInUser') as any);
    if (loggedInUserData) {
      return true;
    } else {
      return false;
    }
  }
}
