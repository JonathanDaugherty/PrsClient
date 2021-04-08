import { Component, OnInit } from '@angular/core';
import { RequestlinesService } from 'src/app/requestlines/requestlines.service';
import { SystemService } from 'src/app/system.service';
import { RequestService } from '../request.service';
import {Request} from '../request.class';
import {Requestlines} from 'src/app/requestlines/requestlines.class';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-finalreview',
  templateUrl: './finalreview.component.html',
  styleUrls: ['./finalreview.component.css']
})
export class FinalreviewComponent implements OnInit {

requests: Request[] = [];
request: Request = new Request;
id: number = 0;
showVerify: boolean = false;



  constructor(
    private rqlsvc: RequestlinesService,
    private rqtsvc: RequestService,
    private sys: SystemService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  approve(): void {
    console.log("B4 Approval: ", this.request)
    this.rqtsvc.approve(this.request).subscribe(
      res => {
        console.log("Approved successfully")
        this.refresh();  
      },
      err => {
        console.error(err);
      }
    )
  }

  toggleVerify(): void {
    this.showVerify =!this.showVerify
  }

  reject(): void {
    this.rqtsvc.reject(this.request).subscribe(
      res => {
        console.log("Reject was Successful");
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
        console.log(res);
        this.request = res;
      },
      err => {
        console.error(err)
      }
    )
  }

  ngOnInit(): void {
    this.refresh();
  }

}
