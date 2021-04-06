import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {VendorService} from '../vendor.service';
import {Vendor} from '../vendor.class';

@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.css']
})
export class VendorDetailComponent implements OnInit {

  vendor: Vendor = new Vendor();
  id: number = 0;
  showVerify: boolean = false;

  constructor(
    private vdrsvc: VendorService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  edit(): void {
    this.router.navigateByUrl(`/vendors/edit/${this.id}`)
  }

  toggleVerify(): void {
    this.showVerify=!this.showVerify;
  }

  delete(): void {
    this.vdrsvc.remove(this.vendor).subscribe(
      res => {
        console.log("Delete was Successful");
        this.router.navigateByUrl("vendors/list");
      },
      err => {
        console.error(err);
      }
    );
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id
    this.vdrsvc.get(this.id).subscribe(
      res => {
        console.log("Vendors:", res);
        this.vendor = res;
      },
      err => {
        console.error(err)
      }
    )
  }

}
