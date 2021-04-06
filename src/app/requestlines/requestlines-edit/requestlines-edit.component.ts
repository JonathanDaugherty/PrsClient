import { Component, OnInit } from '@angular/core';
import {Requestlines} from '../requestlines.class';
import {RequestlinesService} from '../requestlines.service';
import {ActivatedRoute, Router, RouterPreloader} from '@angular/router';
import { Product } from 'src/app/product/product.class';
import { ProductService } from 'src/app/product/product.service';

@Component({
  selector: 'app-requestlines-edit',
  templateUrl: './requestlines-edit.component.html',
  styleUrls: ['./requestlines-edit.component.css']
})
export class RequestlinesEditComponent implements OnInit {
  requestline: Requestlines = null
  products: Product[] = [];

  constructor(
    private rqlsvc: RequestlinesService,
    private pdtsvc: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  save(): void {
    this.requestline.productId = +this.requestline.productId
    console.log("B4 change: ", this.requestline)
    this.rqlsvc.change(this.requestline).subscribe(
      res => {
        console.log("Change Successful")
        this.router.navigateByUrl(`requests/requestlines/${this.requestline.requestId}`)
      },
      err => {
        console.error(err)
      }
    )
  }

  ngOnInit(): void {
    this.pdtsvc.list().subscribe(
      res => {
        console.log(res)
        this.products = res;
      },
      err => {
        console.error(err)
      }
    );
    let id = this.route.snapshot.params.id;
    this.rqlsvc.get(+id).subscribe(
      res => {
        console.log("Requestline:", res);
        this.requestline = res;
      },
      err => {
        console.error(err);
      }
    )
  }
  }

