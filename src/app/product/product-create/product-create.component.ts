import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ProductService} from '../product.service';
import {Product} from '../product.class';
import { Vendor } from 'src/app/vendor/vendor.class';
import {VendorService} from 'src/app/vendor/vendor.service';
import {SystemService} from 'src/app/system.service';


@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

product: Product = new Product();
vendors: Vendor[] = [];


  constructor(
    private pdtsvc: ProductService,
    private vdrsvc: VendorService,
    private router: Router,
    private sys: SystemService

  ) { }

  save(): void {
    this.product.vendorId = +this.product.vendorId;
    console.log("B4 Create:", this.product);
    this.pdtsvc.create(this.product).subscribe(
      res => {
        console.log(res);
        this.router.navigateByUrl("products/list");
      },
      err => {
        console.error(err);
      }
    )
  }

  ngOnInit(): void {
    this.vdrsvc.list().subscribe(
      vendors => {
        this.vendors = vendors;
      },
      err => {
        console.error(err);
      }
    )
  }

}
