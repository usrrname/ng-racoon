import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// clarity module import
import { ClarityModule } from '@clr/angular';
import { CommonModule } from '@angular/common';
import { FeatureLayoutComponent } from './components/layouts/feature-layout/feature-layout.component';
import { HomeLayoutComponent } from './components/layouts/home-layout/home-layout.component';
import { HttpClientModule } from '@angular/common/http';
// components
import { NavbarComponent } from './components/navbar/navbar.component';
// vendor
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';

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
    FormsModule,
    ReactiveFormsModule,
    ClarityModule
  ],
  exports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ClarityModule
  ]
})
export class SharedModule {}
