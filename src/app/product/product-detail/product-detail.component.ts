import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { ProductService } from '../product.service';
import {Product} from '../product.class';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product = new Product();
  id: number = 0;
  showVerify: boolean = false;

  constructor(
    private pdtsvc: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  edit(): void {
    this.router.navigateByUrl(`products/edit/${this.id}`)
  }

  toggleVerify(): void {
    this.showVerify=!this.showVerify;
  }

  delete(): void {
    this.pdtsvc.remove(this.product).subscribe(
      res => {
        console.log("Delete was Successful");
        this.router.navigateByUrl("products/list");
      },
      err => {
        console.error(err);
      }
    );
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id
    this.pdtsvc.get(this.id).subscribe(
      res => {
        console.log("Products:", res);
        this.product = res;
      },
      err => {
        console.error(err)
      }
    )
  }
  

}
