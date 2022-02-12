import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { BookingsComponent } from './admin/bookings/bookings.component';
import { OneComponent } from './admin/report/one/one.component';
import { ReportComponent } from './admin/report/report.component';
import { TwoComponent } from './admin/report/two/two.component';
import { LoginComponent } from './login/login.component';
import { BookingComponent } from './traveler/booking/booking.component';
import { TravelerComponent } from './traveler/traveler.component';


const routes: Routes = [{path:'login',component:LoginComponent},
{path:'admin',component:AdminComponent},
{path:'bookings',component:BookingsComponent},
{path:'traveler',component:TravelerComponent},
{path:'report',component:ReportComponent},
{path:'reportOne',component:OneComponent},
{path:'reportTwo',component:TwoComponent},
{path:'book',component:BookingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
