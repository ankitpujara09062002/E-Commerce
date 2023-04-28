import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from 'src/app/common-service/common.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  // Public Variable
  public loginForm!: FormGroup;
  public checkBoxFlage: boolean = false;

  constructor(private fb: FormBuilder, private toastr: ToastrService, private router: Router, private commonService: CommonService) { }

  ngOnInit(): void {
    // Form
    this.loginForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }

  // Get Controls
  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    // Get Register Form localStorage
    let getRegisterFormData = JSON.parse(localStorage.getItem('registerFormData') as any) ? JSON.parse(localStorage.getItem('registerFormData') as any) : [];

    // Finde User
    let findUser = getRegisterFormData?.find((res: any) => {
      return res.password === this.loginForm.value.password && res.email === this.loginForm.value.email
    });

    if (findUser) {
      // Set User Data in localStorage
      localStorage.setItem('loggedInUser', JSON.stringify(findUser));
      if (findUser.role === "admin") {
        // Loading Flage True
        this.commonService.loading.next(true);
        setTimeout(() => {
          // Loading Flage false
          this.commonService.loading.next(false);
          // Toastr Message
          this.toastr.success('Admin is successfully logged', 'Success', {
            timeOut: 2000,
          });
          this.router.navigate(['dashboard/admin']);
        }, 2000);
      } else {
        // Loading Flage True
        this.commonService.loading.next(true);
        setTimeout(() => {
          // Loading Flage false
          this.commonService.loading.next(false);
          // Toastr Message
          this.toastr.success('Customer is successfully logged', 'Success', {
            timeOut: 2000,
          });
          this.router.navigate(['dashboard/customer']);
        }, 2000);
      }
    } else {
      // Toastr Message
      this.toastr.error('User is not register', 'Error', {
        timeOut: 2000,
      });
      this.loginForm.reset();
    }
  }


  registerBtn() {
    this.router.navigate(['/authentication/registration']);
  }
  
  // CheckBox
  passwordCheckBox() {
    this.checkBoxFlage = !this.checkBoxFlage;
    const myElement: HTMLElement | any = document.getElementById('form3Example4c');
    if (this.checkBoxFlage === true) {
      myElement.type = 'text'
    } else {
      myElement.type = 'password'
    }
  }

}
