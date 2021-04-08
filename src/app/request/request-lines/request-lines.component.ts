import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Request} from '../request.class';
import {Requestlines} from 'src/app/requestlines/requestlines.class';
import {RequestlinesService} from 'src/app/requestlines/requestlines.service';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-lines',
  templateUrl: './request-lines.component.html',
  styleUrls: ['./request-lines.component.css']
})
export class RequestLinesComponent implements OnInit {

request: Request = new Request();
id: number = 0;
requestline: Requestlines = new Requestlines();


  constructor(
    private rqtsvc: RequestService,
    private rqlsvc: RequestlinesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  review(): void {
    this.rqtsvc.review(this.request).subscribe(
      res => {
        console.log("Review initiated")
        this.refresh();
      },
      err => {
        console.error(err);
      }
    )
  }

  edit(): void {
    this.router.navigateByUrl(`requestlines/edit/${this.id}`)
  }

  delete(requestline: Requestlines): void {
    this.requestline.id = +this.requestline.id
    this.requestline.productId = +this.requestline.productId
    this.requestline.requestId = +this.requestline.requestId
    console.log("B4 delete:", this.requestline)
    this.rqlsvc.remove(requestline).subscribe(
      res => {
        console.log("Delete was Successful");
        this.refresh();
      },
      err => {
        console.log(err);
      }    
    );
  }

refresh(): void {
  this.id = this.route.snapshot.params.id
    this.rqtsvc.get(this.id).subscribe(
      res => {
        console.log("Requests:", res);
        this.request = res;
      },
      err => {
        console.error(err);
      }
    );
  }
  ngOnInit(): void {
    this.refresh();
  }
}
