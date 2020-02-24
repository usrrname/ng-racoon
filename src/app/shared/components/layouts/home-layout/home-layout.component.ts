import { Component, OnInit } from '@angular/core';
import { RouteConfigLoadEnd, RouteConfigLoadStart, Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss']
})
export class HomeLayoutComponent implements OnInit {
loading: boolean;
ngOnInit() {
}
constructor(private router: Router) {
  this.loading = false;
  router.events.subscribe( (event: RouterEvent) => {

    if (event instanceof RouteConfigLoadStart) {
      this.loading = true;
    } else if (event instanceof RouteConfigLoadEnd) {
      this.loading = false;
    }
  });
}

}
