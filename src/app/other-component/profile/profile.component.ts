import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from 'src/app/common-service/common.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  // Public Variable
  public userDetials: any;
  public imagePath: any;


  @ViewChild("imageInput", { static: true }) imageInput!: ElementRef;

  constructor(private toastr: ToastrService, private commonService: CommonService) {
    this.userDetials = JSON.parse(localStorage.getItem('loggedInUser') as any);
    this.imagePath = JSON.parse(localStorage.getItem('imagePath') as any)
  }

  ngOnInit(): void {
  }

  addImpage() {
    this.commonService.loading.next(true);
    setTimeout(() => {
      this.commonService.loading.next(false);
      this.imagePath = JSON.parse(localStorage.getItem('imagePath') as any);
      if (this.imagePath) {
        this.toastr.success('Image upload successfully', 'Success', {
          timeOut: 2000,
        });
        this.commonService.imageUpload.next(true);
      }
    }, 2000);
  }

  getImageUrl(event: any) {
    let imageType = event.target.value.split('.')[2]
    if (imageType === 'jpg' || imageType === 'png') {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        localStorage.setItem('imagePath', JSON.stringify(reader.result));
      };
    } else {
      this.toastr.error('Image Type not valid', 'Error', {
        timeOut: 2000,
      });
    }
  }

  remove() {
    this.commonService.loading.next(true);
    setTimeout(() => {
      this.commonService.loading.next(false);
      this.imagePath = ''
      localStorage.removeItem('imagePath');
      this.imageInput.nativeElement.value = '';
      this.toastr.success('Image delete successfully', 'Success', {
        timeOut: 2000,
      });
      this.commonService.imageUpload.next(false);
    }, 2000);
  }

}
