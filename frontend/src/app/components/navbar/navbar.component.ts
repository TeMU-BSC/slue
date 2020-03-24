import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  navMenu = { open: false };
  userMenu = { open: false };

  constructor() { }

  ngOnInit(): void {
  }

  close(menu: string) {
    this[menu].open = false;
  }

  toggle(menu: string) {
    this[menu].open = !this[menu].open;
  }

}
