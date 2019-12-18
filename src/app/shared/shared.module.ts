// vendor
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

//material ui
import {MatToolbarModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

//components
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeLayoutComponent } from './components/layouts/home-layout/home-layout.component';
import { FeatureLayoutComponent } from './components/layouts/feature-layout/feature-layout.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

//custom
// import {DynamicFormsModule} from 'dynamic-forms';
@NgModule({
  declarations: [
    NavbarComponent,
    HomeLayoutComponent,
    FeatureLayoutComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    RouterModule,
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
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule {
  
}
