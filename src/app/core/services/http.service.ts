import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from "rxjs";

let httpInstance: HttpService;

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private baseURL = 'https://api.spacexdata.com/v2/';

  constructor(
    private http: HttpClient
  ) {}

  /**
   * Fetch
   *    Fetch a reqeust
   * @param {String} endpoint
   * @return {Observable<T> }Observable
   */
  fetch<T>(endpoint: String): Observable<T> {
    const uri = `${this.baseURL}${endpoint}`;

    return this.http
      .get<T>(uri);
  }

  /**
   * Handle Error
   * 
   * @param {HttpErrorResponse} err
   * @return {Observable<T>} 
   */
  handleError<T>(err: HttpErrorResponse): Observable<T> {
    let errorMsg = '';

    if (err.error instanceof Error) {
      errorMsg = `An error occured: ${err.error.message}`;
    } else {
      errorMsg = `Server error, code: ${err.status}, message: ${err.message}`;
    }

    return Observable.throw(errorMsg);
  }
}