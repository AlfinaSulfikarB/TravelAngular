import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TravelerService } from 'src/app/shared/traveler.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  page: number=1;
  filter: string;
  title = 'traveler01';
  constructor(public travelerService:TravelerService,private route: Router) { }

  ngOnInit(): void {
    this.travelerService.bindListTravelers();
  }

}
