import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {VendorService} from "../vendor.service";
import {Vendor} from '../vendor.class';


@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent implements OnInit {

vendor: Vendor = new Vendor();

  constructor(
    private vdrsvc: VendorService,
    private router: Router
  ) { }

save(): void {
  console.log("B4 create:", this.vendor)
  this.vdrsvc.create(this.vendor).subscribe(
    res => {
      console.log("Create Successful")
      this.router.navigateByUrl("vendors/list")
    },
    err => {
      console.error(err);
    }
  )
}

  ngOnInit(): void {
  }

}
