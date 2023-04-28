import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  // Public Variable
  public loggedIn: boolean = false;
  public loggedInUserData: any;


  constructor(private router: Router) {
    this.loggedInUserData = JSON.parse(localStorage.getItem('loggedInUser') as any);
    if (this.loggedInUserData) {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }
  }

  ngOnInit(): void {
  }

  navigateToDashboard() {
    if (this.loggedInUserData.role === "admin") {
      this.router.navigate(['dashboard/admin']);
    } else {
      this.router.navigate(['dashboard/customer']);
    }
  }

  navigateToLogin() {
    this.router.navigate(['/authentication/login']);
  }

}
