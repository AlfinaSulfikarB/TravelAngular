import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TravelerService } from 'src/app/shared/traveler.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})
export class OneComponent implements OnInit {

  page:number=1;
  filter:string;

  constructor(public travelerService:TravelerService,private route: Router) { }

  ngOnInit(): void {

    this.travelerService.bindListreportOne();
  }

}
