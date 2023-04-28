import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  // Public Variable

  public allProductData: any;
  public productDetails: any;



  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.allProductData = JSON.parse(localStorage.getItem('productData') as any);

    // Get queryParams in url
    this.activatedRoute.queryParams
      .subscribe((params: any) => {
        // find which product product in allProductDataArray
        this.productDetails = this.allProductData?.find((res: any) => {
          return res.productName === params.productName && res.productImage === params.imageParth
        });
      }
      );
  }

}
