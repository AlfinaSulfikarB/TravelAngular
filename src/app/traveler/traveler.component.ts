import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-traveler',
  templateUrl: './traveler.component.html',
  styleUrls: ['./traveler.component.scss']
})
export class TravelerComponent implements OnInit {
  title = 'traveler01';
  constructor() { }

  ngOnInit(): void {
  }

}
