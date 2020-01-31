import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AgGridModule } from 'ag-grid-angular';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { CommonServiceService } from '../app/service/common-service.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AgGridModule.withComponents([]),
    HttpClientModule
  ],
  providers: [
    CommonServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
