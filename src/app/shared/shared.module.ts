// vendor
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

//material ui
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

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
    MatButtonModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatTableModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSidenavModule,
    MatTableModule,
    MatSlideToggleModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule {
  
}
