import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  // Public Variable

  public allProductData: any;
  public productDetails: any;
  public addedToCart: boolean = false;
  public offerDealsProduct: any = []


  constructor(private activatedRoute: ActivatedRoute, private router: Router, private toastr: ToastrService) {
    let productData = JSON.parse(localStorage.getItem('productData') as any);

    for (let i = 0; i < productData.length; i++) {
      if (i < 3) {
        this.offerDealsProduct.push(productData[i]);
      }
    }
  }

  ngOnInit(): void {
    setInterval(this.myTimer, 1000);

    // Get productData from localstorage
    this.allProductData = JSON.parse(localStorage.getItem('productData') as any);

    // Get cartProducatDetials from localStorage
    let cartProducatDetials = JSON.parse(localStorage.getItem('cartProducatDetials') as any);

    // Get queryParams in url
    this.activatedRoute.queryParams
      .subscribe((params: any) => {
        // find which product product in allProductDataArray
        this.productDetails = this.allProductData?.find((res: any) => {
          return res.productName === params.productName && res.productImage === params.imageParth
        });
        // find this product new or added in cart
        let findCartProduct = cartProducatDetials?.find((res: any) => {
          return res.productName === this.productDetails.productName && res.productImage === this.productDetails.productImage
        });
        // Button tex change using flage
        if (findCartProduct) {
          this.addedToCart = true;
        } else {
          this.addedToCart = false;
        }
      }
      );
  }

  addToCart() {
    // Get cartProducatDetials from localStorage
    let cartProducatDetials = JSON.parse(localStorage.getItem('cartProducatDetials') as any);

    if (cartProducatDetials) {
      // find this product new or added in cart
      let findCartProduct = cartProducatDetials.find((res: any) => {
        return res.productName === this.productDetails.productName && res.productImage === this.productDetails.productImage
      });

      if (findCartProduct) {
        this.router.navigate(['cart']);
      } else {
        // New product Qty add and navigate to cart page
        this.productDetails.productQty = ++this.productDetails.productQty;
        this.productDetails.productTotalPrice = +this.productDetails.productPrice;
        cartProducatDetials.push(this.productDetails);
        localStorage.setItem('cartProducatDetials', JSON.stringify(cartProducatDetials));
        this.toastr.success('Product add in cart successfully', 'Success', {
          timeOut: 2000,
        });
        this.router.navigate(['cart']);
      }
    } else {
      // New product Qty add and navigate to cart page
      this.productDetails.productQty = ++this.productDetails.productQty;
      this.productDetails.productTotalPrice = +this.productDetails.productPrice;
      let productDetials = [];
      productDetials.push(this.productDetails);

      localStorage.setItem('cartProducatDetials', JSON.stringify(productDetials));
      this.toastr.success('Product add in cart successfully', 'Success', {
        timeOut: 2000,
      });
      this.router.navigate(['cart']);
    }
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
