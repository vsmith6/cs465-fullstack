import { Inject, Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";

import { Trip } from "../models/trip";
import { User } from '../models/user';
import { AuthResponse } from '../models/authresponse';
import { BROWSER_STORAGE } from '../storage';

@Injectable()
export class TripDataService {
  constructor(
    private http: Http,
    @Inject(BROWSER_STORAGE) private storage: Storage

  ) { }

  private apiBaseUrl = "http://localhost:3000/api/";
  private tripsUrl = `${this.apiBaseUrl}trips/`;
  private tripUrl = `${this.apiBaseUrl}trip/`;
  private loginUrl = "http://localhost:3000/api";

  public getTrips(): Promise<Trip[]> {
    console.log("Inside TripDataService#getTrips");
    return this.http
      .get(this.tripsUrl)
      .toPromise()
      .then((response) => response.json() as Trip[])
      .catch(this.handleError);
  }

  public getTrip(tripCode: string): Promise<Trip> {
    console.log("Inside TripDataService#getTrip");
    return this.http
      .get(this.tripUrl + tripCode)
      .toPromise()
      .then(response => response.json() as Trip)
      .catch(this.handleError);
  }

  public addTrip(formData: Trip): Promise<Trip> {
    console.log("Inside TripDataService#addTrip");
    const headers = new Headers({
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("travlr-token")}`,
    });

    return this.http
      .post(this.tripsUrl, formData, { headers: headers })
      .toPromise()
      .then(response => response.json() as Trip[])
      .catch(this.handleError);
  }

  public updateTrip(formData: Trip): Promise<Trip> {
    console.log("Inside TripDataService#updateTrip");
    console.log(formData);
    const headers = new Headers({
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("travlr-token")}`,
    });
    return this.http
      .put(this.tripUrl + formData.code, formData, { headers: headers })
      .toPromise()
      .then(response => response.json() as Trip[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error("Something has gone wrong", error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
  public login(user: User): Promise<AuthResponse> {
    return this.makeAuthApiCall('login', user);
  }

  public register(user: User): Promise<AuthResponse> {
    return this.makeAuthApiCall('register', user);
  }

  private makeAuthApiCall(urlPath: string, user: User): Promise<AuthResponse> {
    console.log('Inside makeAuthApiCall');
    const url: string = `${this.loginUrl}/${urlPath}`;
    return this.http
      .post(url, user)
      .toPromise()
      .then((response) => response.json() as AuthResponse)
      .catch(this.handleError);
  }

}
