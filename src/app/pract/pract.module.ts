import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PractRoutingModule } from './pract-routing.module';
import { PractComponent } from './pract/pract.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [PractComponent],
  imports: [
    CommonModule,
    SharedModule,
    PractRoutingModule
  ]
})
export class PractModule { }
