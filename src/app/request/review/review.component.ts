import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/system.service';
import {Request} from '../request.class';
import {RequestService} from '../request.service'; 

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  requests: Request[] = [];
  request: Request = new Request;
  id: number = 0;
  showVerify: boolean = false;

  constructor(
    private rqtsvc: RequestService,
    private sys: SystemService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  review(id: number): void {
    this.router.navigateByUrl(`/requests/finalreview/${id}`)
  }
  


  ngOnInit(): void {  
    this.sys.chkLogin();
    this.rqtsvc.listreviews(this.sys.loggedInUser.id).subscribe(
      res => {
        console.log(res);
        this.requests = res;
      },
      err => {
        console.error(err)
      }
    )
  }

}