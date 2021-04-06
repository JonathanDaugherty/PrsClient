import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Request} from './request.class';


@Injectable({
  providedIn: 'root'
})
export class RequestService {

baseurl = "http://localhost:46200/api/requests"

  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<Request[]> {
    return this.http.get(`${this.baseurl}`) as Observable<Request[]>;
  }

  get(id: number): Observable<Request> {
    return this.http.get(`${this.baseurl}/${id}`) as Observable<Request>;
  }

  create(request: Request): Observable<Request> {
    return this.http.post(`${this.baseurl}`, request) as Observable<Request>;
  }

  change(request: Request): Observable<Request> {
    return this.http.put(`${this.baseurl}/${request.id}`, request) as Observable<Request>;
  }

  remove(request: Request): Observable<Request> {
    return this.http.delete(`${this.baseurl}/${request.id}`) as Observable<Request>;
  }
}
