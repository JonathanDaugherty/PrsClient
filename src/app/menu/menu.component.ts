import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus: any[] = [
    {display: 'Home', route: '/home'}, 
    {display: 'About', route: '/about'},
    {display: 'Users', route: '/users/list'},
    {display: 'Vendors', route: '/vendors/list'}, 
    {display: 'Products', route: '/products/list'},
    {display: 'Requests', route: '/requests/list'},
    {display: 'Reviews', route: '/requests/review/:id'},
    {display: 'Login', route: '/login'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
