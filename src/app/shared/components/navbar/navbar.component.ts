import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  logo = 'assets/icons/logo.svg';

  isHome() {
    if (this.router.url !== '/') {
      return false;
    }
    return true;
  }
  constructor(public router: Router) { }

  ngOnInit() {}
}
