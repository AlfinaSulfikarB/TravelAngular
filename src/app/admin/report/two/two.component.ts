import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TravelerService } from 'src/app/shared/traveler.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.scss']
})
export class TwoComponent implements OnInit {
  page:number=1;
  filter:string;

  constructor(public travelerService:TravelerService,private route: Router) { }

  ngOnInit(): void {
    this.travelerService.bindListreportTwo();
  }

}
