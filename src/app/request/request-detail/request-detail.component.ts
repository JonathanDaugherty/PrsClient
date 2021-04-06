import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Request} from '../request.class';
import {RequestService} from '../request.service';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {
 
  request: Request = new Request()
  id: number = 0;
  showVerify: boolean = false;

  constructor(
    private rqtsvc: RequestService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  edit(): void {
    this.router.navigateByUrl(`requests/edit/${this.id}`)
  }

  toggleVerify(): void {
    this.showVerify =!this.showVerify
  }

  delete(): void {
    this.rqtsvc.remove(this.request).subscribe(
      res => {
        console.log("Delete was Successful");
        this.router.navigateByUrl("requests/list");
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
