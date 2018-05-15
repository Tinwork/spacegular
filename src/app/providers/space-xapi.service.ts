import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';

import { Observable, Subject, pipe } from 'rxjs';
import { map, takeUntil, tap } from 'rxjs/operators';

import { HttpService } from '../core/services/http.service';

import { CompanyData } from '../models/company_data';
import { Rocket } from '../models/rocket';
import { Capsule } from '../models/capsule';
import { Launch } from '../models/launch';
import { LaunchPad } from '../models/launchpad';


@Injectable({
  providedIn: 'root'
})

export class SpaceXAPIService {
  launches: Launch[];

  constructor(
    private restClient: HttpService 
  ) { }

  /**
   * Endpoint : Request on [Company Data]
   * 
   * @param {Object} filters 
   */
  public getCompanyData(filters): Observable<CompanyData[]> {
    return this.restClient
      .fetch<Launch[]>(this.buildRequestURL('companies', filters))
      .pipe(
        tap(console.log),
        map(data => data)
      )
  }

  /**
   * Endpoint : Request on [Rockets]
   * 
   * @param {Object} filters 
   */
  public getRockets(filters): Observable<Rocket[]> {
    return this.restClient
      .fetch<Launch[]>(this.buildRequestURL('rockets', filters))
      .pipe(
        tap(console.log),
        map(data => data)
      )
  }

  /**
   * Endpoint : Request on [Capsules]
   * 
   * @param {Object} filters 
   */
  public getCapsules(filters): Observable<Capsule[]> {
    return this.restClient
      .fetch<Launch[]>(this.buildRequestURL('capsules', filters))
      .pipe(
        tap(console.log),
        map(data => data)
      )
  }

  /**
   * Endpoint : Request on [Launchpad]
   * 
   * @param {Object} filters 
   */
  public getLaunchpad(filters): Observable<LaunchPad[]> {
    return this.restClient
      .fetch<Launch[]>(this.buildRequestURL('launchpads', filters))
      .pipe(
        tap(console.log),
        map(data => data)
      )
  }

  /**
   * Endpoint : Request on [Launches]
   * 
   * @param {Object} filters 
   */
  public getLaunches(filters) : Observable<Launch[]> {
    let url = this.buildRequestURL('launches', filters);

    return this.restClient
      .fetch<Launch[]>(url)
      .pipe(
        tap(console.log),
        map(data => data)
      )
  }

  /**
   * Endpoint : Request on [Detailed Capsule Data]
   * 
   * @param {Object} filters 
   */
  public getDetailedCapsuleData(filters){
    let url = this.buildRequestURL('launches', filters);
    
    return this.restClient.fetch(url).subscribe(
      (data: Launch[]) => this.launches = data
    );
  }
  
  /**
   * Endpoint : Request on [Detailed Core Data]
   * 
   * @param {Object} filters 
   */
  public getDetailedCoreData(filters){
    let url = this.buildRequestURL('launches', filters);
    
    return this.restClient.fetch(url).subscribe(
      (data: Launch[]) => this.launches = data
    );
  }

  /**
   * Build URL for API endpoint
   * 
   * @param {String} entity 
   * @param params 
   */
  private buildRequestURL(entity: String, params) {
    if (!params || typeof params.query_type === 'undefined' || params.query_type === 'latest') {
      return entity + '/latest';
    }

    if (params.query_type === 'upcoming') {
      return entity + '/upcoming';
    }

    if (params.query_type === 'with_filter') {
      
      return entity + '?' + this.buildHttpParams(params.queries).toString();
    }
  }

  /**
   * Build HTTP parameters
   * 
   * @param params 
   */
  private buildHttpParams(params) {
    let httpParams = new HttpParams();
    Object.keys(params).forEach(function(key) {
        httpParams = httpParams.append(key, params[key])
    });

    return httpParams;
  }
}
