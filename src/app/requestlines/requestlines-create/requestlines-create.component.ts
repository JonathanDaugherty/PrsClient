import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { ProductService } from 'src/app/product/product.service';
import {Product} from 'src/app/product/product.class';
import {Requestlines} from '../requestlines.class';
import {RequestlinesService} from '../requestlines.service';

@Component({
  selector: 'app-requestlines-create',
  templateUrl: './requestlines-create.component.html',
  styleUrls: ['./requestlines-create.component.css']
})
export class RequestlinesCreateComponent implements OnInit {

  requestline: Requestlines = new Requestlines;
  products: Product[] = [];

  constructor(
    private rqlsvc: RequestlinesService,
    private pdtsvc: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  save(): void {
    this.requestline.productId = +this.requestline.productId
    console.log("B4 create:", this.requestline)
    this.rqlsvc.create(this.requestline).subscribe(
      res => {
        console.log("Create Successful")
        this.router.navigateByUrl(`requests/requestlines/${this.requestline.requestId}`);
      },
      err => {
        console.log(err);
      }
    );
  }

  ngOnInit(): void {
    this.requestline.requestId = +this.route.snapshot.params.id
    this.pdtsvc.list().subscribe(
      res => {
        console.log(res)
        this.products = res;
      },
      err => {
        console.error(err)
      }
    );
  }

}
