import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Request} from '../request.class';
import {Requestlines} from 'src/app/requestlines/requestlines.class';
import {RequestlinesService} from 'src/app/requestlines/requestlines.service';
import { RequestService } from '../request.service';
import {User} from 'src/app/user/user.class';

@Component({
  selector: 'app-request-lines',
  templateUrl: './request-lines.component.html',
  styleUrls: ['./request-lines.component.css']
})
export class RequestLinesComponent implements OnInit {

request: Request = new Request();
id: number = 0;
showVerify: boolean = false;
requestlines: Requestlines = new Requestlines();


  constructor(
    private rqtsvc: RequestService,
    private rqlsvc: RequestlinesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  edit(): void {
    this.router.navigateByUrl(`requestlines/edit/${this.id}`)
  }

  toggleVerify(): void {
    this.showVerify =!this.showVerify
  }

  delete(): void {
    this.rqlsvc.remove(this.requestlines).subscribe(
      res => {
        console.log("Delete was Successful");
        this.router.navigateByUrl("request/lines");
      },
      err => {
        console.log(err);
      }    
    );
  }

  ngOnInit(): void {
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
}
