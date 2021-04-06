import { Component, OnInit, ɵɵsetComponentScope } from '@angular/core';
import {SystemService} from 'src/app/system.service';
import {Request} from '../request.class';
import {RequestService} from '../request.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({ 
  selector: 'app-request-edit',
  templateUrl: './request-edit.component.html',
  styleUrls: ['./request-edit.component.css']
})
export class RequestEditComponent implements OnInit {

request: Request = null;

  constructor(
    private rqtsvc: RequestService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  save(): void {
    console.log("B4 change: ", this.request)
    this.rqtsvc.change(this.request).subscribe(
      res => {
        console.log("Change Successful")
        this.router.navigateByUrl("/requests/list")
      },
      err => {
        console.error(err)
      }
    )
  }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    this.rqtsvc.get(id).subscribe(
      res => {
        console.log("Request:", res);
        this.request = res;
      },
      err => {
        console.error(err);
      }
    )
  }

}
