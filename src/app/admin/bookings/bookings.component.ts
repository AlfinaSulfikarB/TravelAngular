import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {TravelerService} from 'src/app/shared/traveler.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss']
})

export class BookingsComponent implements OnInit {

  page:number=1;
  filter:string;

  constructor(public travelerService:TravelerService,private route: Router) { }

  ngOnInit(): void {

    this.travelerService.bindListTravelers();
  }

 //Edit employee
 updateTraveler(TravelerId: number){
  console.log(TravelerId);
  //Navigate to edit form with selected employee details
  this.route.navigate(['traveler', TravelerId]);
}

//Delete employee
deletetraveler(TravelerId: number){
  if (confirm('Are you sure you want to DELETE this record?')) {
    this.travelerService.deletetraveler(TravelerId).subscribe(
      response =>{
        this.travelerService.bindListTravelers();
      },
      error =>{
        console.log(error);
      }
    );
  }
}
}
