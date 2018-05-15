import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { CompanyInfo } from 'src/app/Models/CompanyInfo';
import { LaunchesInfo } from 'src/app/Models/LaunchesInfo';
import { RocketsInfo } from 'src/app/Models/RocketsInfo';

@Injectable({
  providedIn: 'root'
})

export class SpacexApiService {
  baseUrl = 'https://api.spacexdata.com/v2'

  constructor(
    private restClient: HttpClient
  ) { }

  getCompanyInfo() : Observable<CompanyInfo> {
    const requestEndpoint = `${this.baseUrl}/info`
    return this.restClient.get<CompanyInfo>(requestEndpoint).pipe(
      catchError(this.handleError)
    );
  }

  getLaunchesInfo() : Observable<LaunchesInfo> {
    const requestEndpoint = `${this.baseUrl}/launches`
    return this.restClient.get<LaunchesInfo>(requestEndpoint).pipe(
      catchError(this.handleError)
    );
  }

  getRocketsInfo() : Observable<RocketsInfo> {
    const requestEndpoint = `${this.baseUrl}/rockets`
    return this.restClient.get<RocketsInfo>(requestEndpoint).pipe(
      catchError(this.handleError)
    );
  }


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}
