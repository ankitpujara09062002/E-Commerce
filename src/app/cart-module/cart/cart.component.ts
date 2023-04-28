import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from 'src/app/common-service/common.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  // Public Variable
  public cartProducatDetials: any;
  public allProductCalculation: any;
  public offerDealsProduct: any = []

  constructor(private commonService: CommonService, private toastr: ToastrService, private router: Router) {
    let productData = JSON.parse(localStorage.getItem('productData') as any);

    for (let i = 0; i < productData.length; i++) {
      if (i < 3) {
        this.offerDealsProduct.push(productData[i]);
      }
    }

    // Get cartProducatDetials from localStorage
    this.cartProducatDetials = JSON.parse(localStorage.getItem('cartProducatDetials') as any);
    this.commonService.cartData.next(this.cartProducatDetials);
  }

  ngOnInit(): void {
    setInterval(this.myTimer, 1000);
    this.productCalculation();

    // Get productCalculation from localStorage
    this.allProductCalculation = JSON.parse(localStorage.getItem('productCalculation') as any);
  }

  getCartQty(event: any, i: number) {
    // Update productQty
    this.cartProducatDetials[i].productQty = +event.target.value;
    // Add new key productTotalPrice
    this.cartProducatDetials[i].productTotalPrice = (+event.target.value * this.cartProducatDetials[i].productPrice);
    this.commonService.cartData.next(this.cartProducatDetials);
    localStorage.setItem('cartProducatDetials', JSON.stringify(this.cartProducatDetials));
    this.productCalculation();
  }

  removeBtn(i: number) {
    let cartProducatDetials = JSON.parse(localStorage.getItem('cartProducatDetials') as any);
    let text = "You are sure is not purchase product";
    if (confirm(text) == true) {
      // Remove ProducatDetials in cartProducatDetials array
      this.cartProducatDetials.splice(i, 1);

      this.commonService.cartData.next(this.cartProducatDetials);

      // Updated cartProducatDetials in localStorage
      localStorage.setItem('cartProducatDetials', JSON.stringify(this.cartProducatDetials));
      this.productCalculation();
      this.toastr.success('Product delete in cart successfully', 'Success', {
        timeOut: 2000,
      });
      if (cartProducatDetials.length === 1) {
        this.router.navigate(['dashboard/customer']);
      }
    }
  }

  checkout() {
    this.router.navigate(['payment']);
  }


  productCalculation() {
    let cartProducatDetials = JSON.parse(localStorage.getItem('cartProducatDetials') as any);
    let allPrice = [];
    for (let i = 0; i < cartProducatDetials.length; i++) {
      if (cartProducatDetials[i]?.productName === 'Titan' || cartProducatDetials[i]?.productName === 'Fastrack' || cartProducatDetials[i]?.productName === 'Sonata') {
        allPrice.push(cartProducatDetials[i]?.productTotalPrice / 2);
      }else{
        allPrice.push(cartProducatDetials[i]?.productTotalPrice);
      }
    }

    // Calculate totalPrice
    let totalPrice = allPrice.reduce((partialSum, a) => partialSum + a, 0);

    // Calculate tax
    let tax = totalPrice * 5 / 100;

    // Calculate grandTotal
    let grandTotal = totalPrice + tax;

    let calculation = { totalPrice: totalPrice, tax: tax, grandTotal: grandTotal };

    // Set productCalculation in localStorage
    localStorage.setItem('productCalculation', JSON.stringify(calculation));

    this.allProductCalculation = calculation;
  }

  myTimer() {
    const d = new Date();
    const myElement: HTMLElement | any = document.getElementById('time');
    if (myElement === undefined || myElement === null) {
      return;
    } else {
      myElement.innerHTML = d.toLocaleTimeString();
    }
  }

}
