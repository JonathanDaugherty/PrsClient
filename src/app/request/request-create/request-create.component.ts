import { Component, OnInit } from '@angular/core';
import {SystemService} from 'src/app/system.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Request} from '../request.class';
import {RequestService} from '../request.service';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {

request: Request = new Request();

  constructor(
    private rqtsvc: RequestService,
    private router: Router,
    private sys: SystemService
  ) { }

  save(): void {
    console.log("B4 create:", this.request)
    this.rqtsvc.create(this.request).subscribe(
      res => {
        console.log("Create Successful")
        this.router.navigateByUrl("requests/list");
      },
      err => {
        console.log(err);
      }
    );
  }

  ngOnInit(): void {
    this.sys.chkLogin();
    this.request.userId = this.sys.loggedInUser.id;
  }

}
