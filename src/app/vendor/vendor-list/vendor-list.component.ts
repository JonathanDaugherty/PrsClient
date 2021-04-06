import { Component, OnInit } from '@angular/core';
import {VendorService} from '../vendor.service';
import {Vendor} from '../vendor.class'

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {

  vendors: Vendor[] = [];
  searchCriteria: string = "";

  constructor(
    private vdrsvc: VendorService
  ) { }

  ngOnInit(): void {
    this.vdrsvc.list().subscribe(
      vendors => {
        console.log("Vendors:", vendors)
        this.vendors = vendors;
      },
      err => {
        console.error(err);
      }
    )
  }

}
