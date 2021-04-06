import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Product} from '../product.class';
import {ProductService} from '../product.service';
import {Vendor} from 'src/app/vendor/vendor.class';
import {VendorService} from 'src/app/vendor/vendor.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product: Product = null;
  vendors: Vendor[] = [];
 
 
  constructor(
    private pdtsvc: ProductService,
    private vdrsvc: VendorService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

save(): void {
  this.product.vendorId = +this.product.vendorId;
  console.log("B4 change", this.product);
  this.pdtsvc.change(this.product).subscribe(
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
      res => {
        console.log(res);
        this.vendors = res;
      },
      err => {
        console.error(err);
      }
    );
    let id = this.route.snapshot.params.id;
    this.pdtsvc.get(+id).subscribe(
      res => {
        console.log(res);
        this.product = res;
      },
      err => {
        console.error(err);
      }
    )
  }

}
