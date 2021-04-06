import { Injectable } from '@angular/core';
import { User } from './user/user.class';
import {Vendor} from './vendor/vendor.class';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SystemService {

loggedInUser: User = null;

  constructor(
    private router: Router
  ) { }
  
  
  chkLogin(): void {
    if(this.loggedInUser == null) {
      this.router.navigateByUrl('/login');
      console.warn("Check for login disabled");
    }
  }
}

