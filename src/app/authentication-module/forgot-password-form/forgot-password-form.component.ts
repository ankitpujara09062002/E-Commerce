import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from 'src/app/common-service/common.service';

@Component({
  selector: 'app-forgot-password-form',
  templateUrl: './forgot-password-form.component.html',
  styleUrls: ['./forgot-password-form.component.scss']
})
export class ForgotPasswordFormComponent implements OnInit {

  // Public Variable
  public forgotPasswordForm!: FormGroup;
  public inputFildeFlage: boolean = false;
  public confirmPasswordCheckBoxFlage: boolean = false;
  public newPasswordCheckBoxFlage: boolean = false;


  constructor(private fb: FormBuilder, private toastr: ToastrService, private router: Router, private commonService: CommonService) { }

  ngOnInit(): void {

    // Form
    this.forgotPasswordForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      newPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', Validators.required),
    }, {
      validator: this.confirmedValidator('newPassword', 'confirmPassword')
    });
  }

  // Get Controls
  get f() {
    return this.forgotPasswordForm.controls;
  }

  onSubmit() {
    // Get Register Form localStorage
    let getRegisterFormData = JSON.parse(localStorage.getItem('registerFormData') as any) ? JSON.parse(localStorage.getItem('registerFormData') as any) : [];

    // Finde User Index
    let findUserIndex = getRegisterFormData?.findIndex((res: any) => {
      return res.email === this.forgotPasswordForm.value.email
    });

    if (findUserIndex === -1) {
      // Toastr Message
      this.toastr.error('Email is not valid', 'Error', {
        timeOut: 2000,
      });
      this.forgotPasswordForm.reset();
    } else {
      // Change password & confirmPassword
      getRegisterFormData[findUserIndex].password = this.forgotPasswordForm.value.newPassword;
      getRegisterFormData[findUserIndex].confirmPassword = this.forgotPasswordForm.value.newPassword;

      // Set updated data in localStorage
      localStorage.setItem('registerFormData', JSON.stringify(getRegisterFormData));

      // Loading Flage True
      this.commonService.loading.next(true);
      setTimeout(() => {
        // Loading Flage false
        this.commonService.loading.next(false);

        // Toastr Message
        this.toastr.success('Password Updat successfully', 'Success', {
          timeOut: 2000,
        });
        this.router.navigate(['/authentication/login']);
      }, 2000);
    }

  }

  // Get User email
  getUserEmail(event: any) {
    // Get Register Form localStorage
    let getRegisterFormData = JSON.parse(localStorage.getItem('registerFormData') as any) ? JSON.parse(localStorage.getItem('registerFormData') as any) : [];

    // Finde User Index
    let findUserIndex = getRegisterFormData?.findIndex((res: any) => {
      return res.email === event.target.value
    });

    if (findUserIndex === -1) {
      // Toastr Message
      this.toastr.error('Email is not valid', 'Error', {
        timeOut: 2000,
      });
      this.inputFildeFlage = false;
      this.forgotPasswordForm.reset();
    } else {
      this.inputFildeFlage = true;
    }
  }

  logninBtn() {
    this.router.navigate(['/authentication/login']);
  }

  // Custome Validation
  confirmedValidator(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (matchingControl.errors && !matchingControl.errors['confirmedValidator']) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ confirmedValidator: true });
      } else {
        matchingControl.setErrors(null);
      }
    }
  }
  
  // CheckBox
  newPasswordCheckBox() {
    this.newPasswordCheckBoxFlage = !this.newPasswordCheckBoxFlage;
    const myElement: HTMLElement | any = document.getElementById('newPassword');
    if (this.newPasswordCheckBoxFlage === true) {
      myElement.type = 'text'
    } else {
      myElement.type = 'password'
    }
  }
  
  // CheckBox
  confirmPasswordCheckBox() {
    this.confirmPasswordCheckBoxFlage = !this.confirmPasswordCheckBoxFlage;
    const myElement: HTMLElement | any = document.getElementById('confirmPassword');
    if (this.confirmPasswordCheckBoxFlage === true) {
      myElement.type = 'text'
    } else {
      myElement.type = 'password'
    }
  }

}
