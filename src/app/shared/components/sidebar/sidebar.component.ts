import { Component, OnInit, Input } from '@angular/core';

import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  sidenav: MatSidenav;
  color = 'accent';
  disabled = false;
  opened = false;
  
  
  constructor() { 
  }
    ngOnInit(){
      
      
    };
  
}
