import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  public cartData = new Subject<any>();
  public imageUpload = new Subject<boolean>();
  public loading = new Subject<boolean>();
  public searchProduct = new Subject<any>();

  constructor() { }
}
