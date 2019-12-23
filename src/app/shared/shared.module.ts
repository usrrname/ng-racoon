// vendor
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

//material ui
import {MatToolbarModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSidenavModule} from '@angular/material/sidenav';

//components
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeLayoutComponent } from './components/layouts/home-layout/home-layout.component';
import { FeatureLayoutComponent } from './components/layouts/feature-layout/feature-layout.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SidebarComponent } from './components/sidebar/sidebar.component';

//custom
// import {DynamicFormsModule} from 'dynamic-forms';
@NgModule({
  declarations: [
    NavbarComponent,
    HomeLayoutComponent,
    FeatureLayoutComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatSidenavModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatSidenavModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule {
  
}
