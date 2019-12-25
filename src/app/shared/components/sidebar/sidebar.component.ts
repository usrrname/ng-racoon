import { Component, OnInit, Input } from '@angular/core';
import { Router, RouterEvent, RouteConfigLoadStart, RouteConfigLoadEnd } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  sidenav: MatSidenav;
  color = 'accent';
  mode = 'indeterminate';
  disabled: boolean;
  opened = false;
  loading: boolean;
  
  constructor(private router: Router){
    this.loading = false;
    router.events.subscribe( (event: RouterEvent) => {
      if (event instanceof RouteConfigLoadStart) {
        this.loading = true;
      }
      else if (event instanceof RouteConfigLoadEnd){
        this.loading = false;
      }
      this.loading ? this.disabled = true : this.disabled = false;
    })
  }

    ngOnInit(){
      
      
    };
  
}
