// Config
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Modules
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
// Components
import { HomeComponent } from './components/home/home.component';
import { PatientService } from './services/patient.service';
import { UtilService } from './services/util.service';
import { ClarityModule } from '@clr/angular';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ClarityModule,
  ],
  providers: [PatientService, UtilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
