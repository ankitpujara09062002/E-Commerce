import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { filter } from 'rxjs';
import { CommonService } from 'src/app/common-service/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // Public Variable
  public loggedInUserData: any;
  public cartAmount: string = '0';
  public cartProducatDetials: any;
  public imagePath: any;
  public searchInputFlage: boolean = true;

  @ViewChild('popModel') popModel!: ElementRef<HTMLElement>;

  constructor(private router: Router, private commonService: CommonService, private toastr: ToastrService) {

    this.loggedInUserData = JSON.parse(localStorage.getItem('loggedInUser') as any);
    if (this.loggedInUserData === null) {
      setTimeout(() => {
        let el: HTMLElement = this.popModel.nativeElement;
        el.click();
      }, 2000);
    }
    if (this.router.url === '/dashboard/customer') {
      this.searchInputFlage = true;
    } else {
      this.searchInputFlage = false;
    }
    router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event: any) => {
      if (event.url === '/dashboard/customer') {
        this.searchInputFlage = true;
      } else {
        this.searchInputFlage = false;
      }
    });
  }

  ngOnInit(): void {
    this.commonService.imageUpload.subscribe((res) => {
      if (res === true) {
        this.imagePath = JSON.parse(localStorage.getItem('imagePath') as any);
      } else {
        this.imagePath = JSON.parse(localStorage.getItem('imagePath') as any);
      }
    });
    this.imagePath = JSON.parse(localStorage.getItem('imagePath') as any);

    this.commonService.cartData.subscribe((res) => {
      if (res === true) {
        this.cartAmount = '0';
      } else {
        let totalQty = [];
        for (let i = 0; i < res.length; i++) {
          totalQty.push(res[i].productQty);
        }

        this.cartAmount = totalQty.reduce((partialSum, a) => partialSum + a, 0);
      }
    });
    let totalQty = [];
    this.cartProducatDetials = JSON.parse(localStorage.getItem('cartProducatDetials') as any);
    for (let i = 0; i < this.cartProducatDetials?.length; i++) {
      totalQty.push(this.cartProducatDetials[i].productQty);
    }

    this.cartAmount = totalQty.reduce((partialSum, a) => partialSum + a, 0);

  }

  logoutBtn() {
    localStorage.removeItem('loggedInUser');
    this.router.navigate(['/authentication/login']);
  }

  signBtn() {
    this.router.navigate(['/authentication/registration']);
  }

  goToCart() {
    let cartProducatDetials = JSON.parse(localStorage.getItem('cartProducatDetials') as any);
    if (cartProducatDetials?.length > 0) {
      this.router.navigate(['/cart']);
    } else {
      this.toastr.warning('Please add to cart ', 'Error', {
        timeOut: 2000,
      });
    }
  }

  // Search Product
  searchProduct(event: any) {
    this.commonService.searchProduct.next(event.target.value);
  }

  dashboardNavigation() {
    if (this.loggedInUserData.role === 'customer') {
      this.router.navigate(['/dashboard/customer']);
    } else {
      this.router.navigate(['/dashboard/admin']);
    }
  }
}
