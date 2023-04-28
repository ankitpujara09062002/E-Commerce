import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { CommonService } from './common-service/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'e-commerce';

  // Public Variable
  public navFlage: boolean = false;
  public loadingFlage: boolean = false;

  constructor(private router: Router, private commonService: CommonService) {
    router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event: any) => {
      let loggedInUserData = JSON.parse(localStorage.getItem('loggedInUser') as any);
      if (loggedInUserData) {
        if (event.url === "/dashboard/admin" || event.url === "/dashboard/customer" || event.url.includes('/dashboard/product-detail') || event.url === '/cart' || event.url === '/profile' || event.url === '/payment' || event.url.includes('/dashboard/customer-detail') || event.url === '/dashboard/product' || event.url.includes('/dashboard/product-edit')) {
          this.navFlage = true;
        } else if (event.url === "/authentication/login" || event.url === "/authentication/registration" || event.url === '/authentication/forgot-Password') {
          if (loggedInUserData.role === "admin") {
            this.router.navigate(['dashboard/admin'])
          } else {
            this.router.navigate(['dashboard/customer'])
          }
        } else {
          this.navFlage = false;
        }
      } else {
        if (event.url === "/dashboard/admin" || event.url === "/dashboard/customer" || event.url === '/dashboard/product-detail' || event.url === '/cart' || event.url === '/profile' || event.url === '/payment' || event.url === '/' || event.url.includes('/dashboard/product-edit')) {
          this.navFlage = true;
        } else {
          this.navFlage = false;
        }
      }
    });
  }

  ngOnInit(): void {
    this.commonService.loading.subscribe((res: any) => {
      this.loadingFlage = res;
    })
  }
}
