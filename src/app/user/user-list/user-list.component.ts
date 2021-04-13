import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {User} from '../user.class';
import { SystemService } from 'src/app/system.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  
  users: User[] = [];
  searchCriteria: string = "";
  get isAdmin() {return this.sys.isAdmin}

  constructor(
    private usrsvc: UserService,
    private sys: SystemService
  ) { }

  ngOnInit(): void {
    this.usrsvc.list().subscribe(
      users => {
        console.log("Users: ", users)
        this.users = users;
      },
      err => {
        console.error(err);
      }
    )
  }

}
