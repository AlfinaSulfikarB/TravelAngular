import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {Traveler} from './traveler';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TravelerService {

  traveler:Traveler[];
  formData: Traveler = new Traveler();

  constructor(private httpClient: HttpClient) { }

  bindListTravelers() {
    return this.httpClient
      .get(environment.apiUrl + 'bookings/getallbooking')
      .toPromise()
      .then((response) => {
        console.log('from service');
        console.log(response);
        this.traveler = response as Traveler[];
      });
  }

  bindListreportOne() {
    return this.httpClient
      .get(environment.apiUrl + 'bookings/getbookingbyairport')
      .toPromise()
      .then((response) => {
        console.log('from service');
        console.log(response);
        this.traveler = response as Traveler[];
      });
  }
  bindListreportTwo() {
    return this.httpClient
      .get(environment.apiUrl + 'bookings/getbookingbydate')
      .toPromise()
      .then((response) => {
        console.log('from service');
        console.log(response);
        this.traveler = response as Traveler[];
      });
    }
    updatetraveler(traveler: Traveler): Observable<any> {
      return this.httpClient.put(
        environment.apiUrl + 'bookings/updatetraveler',
        traveler
      );
    }

    //Delete traveler
    deletetraveler(id: number) {
      return this.httpClient.delete(environment.apiUrl + 'bookings/deletetraveler' + id);
    }

}
