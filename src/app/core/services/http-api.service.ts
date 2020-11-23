import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Flight } from 'src/app/common-modules/shared/interfaces/flight';
import { Passenger } from 'src/app/common-modules/shared/interfaces/passenger';
import { Services } from 'src/app/common-modules/shared/interfaces/services';
import { Seat } from 'src/app/common-modules/shared/interfaces/seat';
import { SocialUser } from 'angularx-social-login';

@Injectable({
  providedIn: 'root',
})
export class HttpApiService {
  private baseURL: string;
  public currentFid: number;
  public fId: number;
  public passengerId: number;
  public id: number;
  currentPassenger: Passenger;
  loggedIn = false;
  socailUsers = new SocialUser();

  constructor(private httpClient: HttpClient, private router: Router) {
    this.baseURL = 'http://localhost:3000';
  }

  // tslint:disable-next-line: typedef
  public setLogInstatus() {
    this.loggedIn = true;
    console.log('coming here');
  }
  public setUser(user): void{
    this.socailUsers = user;
  }

  public getFlights(): Observable<Flight[]> {
    return this.httpClient.get<Flight[]>(this.baseURL + '/flights');
  }
  public getFlightById(id): Observable<Flight> {
    console.log(id);
    return this.httpClient.get<Flight>(this.baseURL + '/flights?fid=' + id);
  }
  public getPassenger(): Observable<Passenger[]> {
    return this.httpClient.get<Passenger[]>(this.baseURL + '/passengers');
  }

  public setCurrentFlight(id: number): void {
    this.currentFid = id;
    console.log(this.currentFid);
  }
  public setpassengerId(id: number): void {
    this.passengerId = id;

  }
  public deletePassenger(): Observable<any> {
    return this.httpClient.delete<any>(this.baseURL + '/passengers?id=' + this.passengerId);
  }
  /*
  *getting seat staus and again save its value after toggeling.
  *function for getting checkIn status from seatNo.
  */
  getCheckInStatusUsingSeatNumber(seat: string): Observable<Passenger> {
    return this.httpClient.get<Passenger>(this.baseURL + '/passengers?seatNo=' + seat + '&fid=' + this.fId);
  }

  public getAllPassengers(): Observable<Passenger[]> {
    return this.httpClient.get<Passenger[]>(this.baseURL + '/passengers');
  }

  public getServices(): Observable<any> {
    return this.httpClient.get<any>(this.baseURL + '/services?fid=' + this.currentFid);
  }

  public getPassengersByFlight(): Observable<Passenger[]> {
    this.fId = this.currentFid;
    return this.httpClient.get<Passenger[]>(this.baseURL + '/passengers?fid=' + this.fId);
  }
  public getSeatForCheckIn(): Observable<Seat[]>{
    return this.httpClient.get<Seat[]>(this.baseURL + '/checkInSeat');
  }

  public getSeatForMeal(): Observable<Seat[]>{
    return this.httpClient.get<Seat[]>(this.baseURL + '/checkMeal');
  }

  public updateCheckInStatus(passenger: Passenger): Observable<Passenger>{
    console.log(passenger.id);
    console.log(passenger);
    return this.httpClient.put<Passenger>(this.baseURL + '/passengers/' + passenger.id , passenger);
  }
  public getPassengerById(): Observable<Passenger> {
    this.id = this.passengerId;
    console.log(this.id);
    return this.httpClient.get<Passenger>(this.baseURL + '/passengers?id=' + this.passengerId);
  }

  public updatePassengerDetails(passenger: Passenger): Observable<Passenger> {
    return this.httpClient.put<Passenger>(this.baseURL + '/passengers/' + passenger.id, passenger);
  }
  public addPassengerDetails(passenger: Passenger): Observable<any> {
    return this.httpClient.post<Passenger>(this.baseURL + '/passengers', passenger);
  }
  public updateService(service1: Services): Observable<Services> {
    this.id = service1.id;
    return this.httpClient.put<Services>(this.baseURL + '/services/' + this.id, service1);
  }

  changeSeat(passenger: Passenger): void {
    this.currentPassenger = passenger;
  }

  getCurrentPassenger(): Passenger {
    return this.currentPassenger;
  }

  public updatePassenngerSeat(passenger: Passenger): Observable<Passenger> {
    return this.httpClient.put<Passenger>(this.baseURL + '/passengers/' + passenger.id, passenger);
  }

  public getFlightServices(): Observable<Services[]> {
    return this.httpClient.get<Services[]>(this.baseURL + '/services?fid=' + this.currentFid);
  }
}
