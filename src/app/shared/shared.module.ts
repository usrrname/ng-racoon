// vendor
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {MatToolbarModule} from '@angular/material';
//components
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeLayoutComponent } from './components/layouts/home-layout/home-layout.component';
import { FeatureLayoutComponent } from './components/layouts/feature-layout/feature-layout.component';

@NgModule({
  declarations: [
    NavbarComponent,
    HomeLayoutComponent,
    FeatureLayoutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
  ],
  exports: [
    RouterModule,
    HttpClientModule,
    CommonModule,
    HttpClientModule,
    MatToolbarModule
  ]
})
export class SharedModule {
  
}
