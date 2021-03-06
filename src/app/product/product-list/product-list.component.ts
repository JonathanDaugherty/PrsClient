import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import {Product} from '../product.class';
import { SystemService } from 'src/app/system.service';

 
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

products: Product[] = [];
searchCriteria: string = "";

  constructor(
    private sys: SystemService,
    private pdtsvc: ProductService
  ) { }


  ngOnInit(): void {
    this.pdtsvc.list().subscribe(
      res => {
        console.log("Products:", res);
        this.products = res;
      },
      err => {
        console.error(err);
      }
    )
  }

}
