import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

export interface PeriodicElement {
  name: string;
  id: string;
  email: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { id: '1', name: 'TestA', email: 'testa@gmail.com' },
  { id: '2', name: 'TestB', email: 'testb@gmail.com' },
  { id: '3', name: 'TestC', email: 'testc@gmail.com' },
  { id: '4', name: 'TestD', email: 'testd@gmail.com' },
  { id: '5', name: 'TestE', email: 'teste@gmail.com' },
  { id: '6', name: 'TestF', email: 'testf@gmail.com' },
  { id: '7', name: 'TestG', email: 'testg@gmail.com' },
  { id: '8', name: 'TestH', email: 'testh@gmail.com' },
  { id: '9', name: 'TestI', email: 'testi@gmail.com' },
  { id: '10', name: 'TestJ', email: 'testj@gmail.com' },
  { id: '11', name: 'TestK', email: 'testk@gmail.com' },
  { id: '12', name: 'TestL', email: 'testl@gmail.com' },
  { id: '13', name: 'TestM', email: 'testm@gmail.com' },
  { id: '14', name: 'TestN', email: 'testn@gmail.com' },
  { id: '15', name: 'TestO', email: 'testo@gmail.com' },
  { id: '16', name: 'TestP', email: 'testp@gmail.com' },
  { id: '17', name: 'TestQ', email: 'testq@gmail.com' },
  { id: '18', name: 'TestR', email: 'testr@gmail.com' },
  { id: '19', name: 'TestS', email: 'tests@gmail.com' },
  { id: '20', name: 'TestT', email: 'testt@gmail.com' },
  { id: '21', name: 'TestU', email: 'testu@gmail.com' },
  { id: '22', name: 'TestW', email: 'testw@gmail.com' },
  { id: '23', name: 'TestD', email: 'testd@gmail.com' },
  { id: '24', name: 'TestX', email: 'testx@gmail.com' },
  { id: '25', name: 'TestY', email: 'testy@gmail.com' },
  { id: '26', name: 'TestZ', email: 'testz@gmail.com' },
  { id: '27', name: 'TestAA', email: 'testaa@gmail.com' },
  { id: '28', name: 'TestBB', email: 'testbb@gmail.com' },
  { id: '29', name: 'TestCC', email: 'testcc@gmail.com' },
  { id: '30', name: 'TestDD', email: 'testdd@gmail.com' },
];

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit, AfterViewInit {

  // Public Variable

  public displayedColumns: string[] = ['id', 'name', 'email', 'action'];
  public dataSource = new MatTableDataSource(ELEMENT_DATA);
  public pageSizes = [10, 25, 30];
  public appProductsData: any;
  public currentPage: any;
  


  @ViewChild('paginatorPageSize') paginatorPageSize: MatPaginator | any;
  @ViewChild(MatSort) sort: MatSort | any;


  constructor(private router: Router) {
    this.appProductsData = JSON.parse(localStorage.getItem('productData') as any);

  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginatorPageSize;
    this.dataSource.sort = this.sort;
  }

  pageChange(event: any) {
    this.currentPage = event;
  }

  editProduct(product: any) {
    this.router.navigate(
      ['/dashboard/product-edit'],
      { queryParams: { productName: `${product.productName}`, imageParth: `${product.productImage}` } }
    );

  }

  showDetail(id: any) {
    this.router.navigate(
      ['dashboard/customer-detail'],
      { queryParams: { id: `${id}` } }
    );
  }

}
