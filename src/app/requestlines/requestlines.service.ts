import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Requestlines} from '../requestlines/requestlines.class';

@Injectable({
  providedIn: 'root'
})
export class RequestlinesService {

  baseurl = "http://localhost:46200/api/RequestLines"

  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<Requestlines[]> {
    return this.http.get(`${this.baseurl}`) as Observable<Requestlines[]>;
  }

  get(id: number): Observable<Requestlines> {
    return this.http.get(`${this.baseurl}/${id}`) as Observable<Requestlines>;
  }

  create(requestlines: Requestlines): Observable<Requestlines> {
    return this.http.post(`${this.baseurl}`, requestlines) as Observable<Requestlines>;
  }

  change(requestlines: Requestlines): Observable<Requestlines> {
    return this.http.put(`${this.baseurl}/${requestlines.id}`, requestlines) as Observable<Requestlines>;
  }

  remove(requestlines: Requestlines): Observable<Requestlines> {
    return this.http.delete(`${this.baseurl}/${requestlines.id}`) as Observable<Requestlines>;
  }
}
