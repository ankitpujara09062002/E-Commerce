import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from 'src/app/common-service/common.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {

  // Public Variable
  public registerForm!: FormGroup;
  public passwordCheckBoxFlage: boolean = false;
  public confirmPasswordCheckBoxFlage: boolean = false;




  constructor(private fb: FormBuilder, private toastr: ToastrService, private router: Router, private commonService: CommonService) { }

  ngOnInit(): void {

    // Form
    this.registerForm = this.fb.group({
      userName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', Validators.required),
      role: new FormControl('', Validators.required),
    }, {
      validator: this.confirmedValidator('password', 'confirmPassword')
    });
  }

  // Get Controls
  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    // Get Register Form localStorage
    let getRegisterFormData = JSON.parse(localStorage.getItem('registerFormData') as any) ? JSON.parse(localStorage.getItem('registerFormData') as any) : [];

    // Finde User
    let findUser = getRegisterFormData.find((res: any) => {
      return res.userName === this.registerForm.value.userName && res.email === this.registerForm.value.email
    });

    if (findUser) {
      // Toastr Message
      this.toastr.error('User is alreday exist', 'Error', {
        timeOut: 2000,
      });
      this.registerForm.reset();
    } else {
      if (getRegisterFormData.length === 0) {
        let registerFormArray = [];
        registerFormArray.push(this.registerForm.value);
        // User Data set in localStorage
        localStorage.setItem('registerFormData', JSON.stringify(registerFormArray));
        // Loading Flage True
        this.commonService.loading.next(true);
        setTimeout(() => {
          // Loading Flage false
          this.commonService.loading.next(false);
          // Toastr Message
          this.toastr.success('User is successfully registr', 'Success', {
            timeOut: 2000,
          });
          this.router.navigate(['/authentication/login']);
        }, 2000);
        this.registerForm.reset();
      } else {
        getRegisterFormData.push(this.registerForm.value);
        localStorage.setItem('registerFormData', JSON.stringify(getRegisterFormData));
        // Loading Flage True
        this.commonService.loading.next(true);
        setTimeout(() => {
          // Loading Flage false
          this.commonService.loading.next(false);
          // Toastr Message
          this.toastr.success('User is successfully registr', 'Success', {
            timeOut: 2000,
          });
          this.router.navigate(['/authentication/login']);
        }, 2000);
        this.registerForm.reset();
      }
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
  passwordCheckBox() {
    this.passwordCheckBoxFlage = !this.passwordCheckBoxFlage;
    const myElement: HTMLElement | any = document.getElementById('password');
    if (this.passwordCheckBoxFlage === true) {
      myElement.type = 'text'
    } else {
      myElement.type = 'password'
    }
  }
  
  // CheckBox
  confirmPasswordCheckBox() {
    this.confirmPasswordCheckBoxFlage = !this.confirmPasswordCheckBoxFlage;
    const myElement: HTMLElement | any = document.getElementById('confirm-password');
    if (this.confirmPasswordCheckBoxFlage === true) {
      myElement.type = 'text'
    } else {
      myElement.type = 'password'
    }
  }
}
