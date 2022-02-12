import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { AdminComponent } from './admin/admin.component';
import { BookingsComponent } from './admin/bookings/bookings.component';
import { TravelerComponent } from './traveler/traveler.component';
import { BookingComponent } from './traveler/booking/booking.component';
import { ReportComponent } from './admin/report/report.component';
import { FlightsComponent } from './admin/flights/flights.component';
import { OneComponent } from './admin/report/one/one.component';
import { TwoComponent } from './admin/report/two/two.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    BookingsComponent,
    TravelerComponent,
    BookingComponent,
    ReportComponent,
    FlightsComponent,
    OneComponent,
    TwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
