import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from "rxjs";
import { catchError } from 'rxjs/operators';

// import known models
import { CompanyInfo } from 'src/app/shared/models/CompanyInfo';
import { LaunchesInfo } from 'src/app/shared/models/LaunchesInfo';
import { RocketsInfo } from 'src/app/shared/models/RocketsInfo';

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
   * Get Company Info
   * 
   * @return Observable
   */
  getCompanyInfo() : Observable<CompanyInfo> {
    const requestEndpoint = `${this.baseURL}/info`;
    return this.http
      .get<CompanyInfo>(requestEndpoint)
      .pipe(
        catchError(err => this.handleError(err))
      );
  }

  /**
   * Get Launches Info
   * 
   * @return Observable
   */
  getLaunchesInfo() : Observable<LaunchesInfo> {
    const requestEndpoint = `${this.baseURL}/launches`;
    return this.http
    .get<LaunchesInfo>(requestEndpoint)
    .pipe(
      catchError(err => this.handleError(err))
    );
  }

  /**
   * Get Rocket Info
   * 
   * @return Observable
   */
  getRocketsInfo() : Observable<RocketsInfo> {
    const requestEndpoint = `${this.baseURL}/rockets`;
    return this.http
      .get<RocketsInfo>(requestEndpoint)
      .pipe(
        catchError(err => this.handleError(err))
      );
  }

  /**
   * Fetch
   *    Fetch a reqeust
   * @param {String} endpoint
   * @return {Observable<T>} Observable
   */
  fetch<T>(endpoint: String): Observable<T> {
    const uri = `${this.baseURL}${endpoint}`;

    return this.http
      .get<T>(uri)
      .pipe(
        catchError(err => this.handleError(err))
      );
  }

  /**
   * Handle Error
   * 
   * @param {HttpErrorResponse} err
   * @return {Observable<T>} 
   */
  private handleError<T>(err: HttpErrorResponse): Observable<T> {
    let errorMsg = '';

    if (err.error instanceof Error) {
      errorMsg = `An error occured: ${err.error.message}`;
    } else {
      errorMsg = `Server error, code: ${err.status}, message: ${err.message}`;
    }

    console.log(errorMsg);
    return Observable.throw(errorMsg);
  }
}