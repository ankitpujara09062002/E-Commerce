import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from 'src/app/common-service/common.service';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.scss']
})
export class PaymentFormComponent implements OnInit {

  // Public Variable
  public paymentForm!: FormGroup;
  public addFlage: boolean = false;


  constructor(private fb: FormBuilder, private toastr: ToastrService, private router: Router, private commonService: CommonService) {
    setTimeout(() => {
      this.addFlage = true;
    }, 2000);
  }

  ngOnInit(): void {
    // Form
    this.paymentForm = this.fb.group({
      firstName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormControl('', [Validators.required]),
      city: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      cardName: new FormControl('', Validators.required),
      cardNumber: new FormControl('', Validators.required),
    });
  }

  // Get Controls
  get f() {
    return this.paymentForm.controls;
  }


  onSubmit() {
    if (this.paymentForm.valid) {
      this.commonService.loading.next(true);
      setTimeout(() => {
        this.commonService.loading.next(false);
        this.toastr.success('Your order placed successfully', 'Success', {
          timeOut: 2000,
        });
        this.paymentForm.reset();
        this.router.navigate(['dashboard/customer']);
        localStorage.removeItem('cartProducatDetials');
        localStorage.removeItem('productCalculation');
        this.commonService.cartData.next(true);
      }, 2000);
    } else {
      this.toastr.error('Please file the form', 'Error', {
        timeOut: 2000,
      });
    }
  }
}
