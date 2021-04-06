import { Component, OnInit } from '@angular/core';
import {RequestService} from '../request.service';
import {Request} from '../request.class';

@Component({ 
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {

requests: Request[] = [];
searchCriteria: string = "";

  constructor(
    private rqtsvc: RequestService
  ) { }

  ngOnInit(): void {
    this.rqtsvc.list().subscribe(
      res => {
        console.log("Requests:", res)
        this.requests = res;
      },
      err => {
        console.log(err);
      }
    )
  }

}
