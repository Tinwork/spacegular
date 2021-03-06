import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';

import { Observable, Subject, pipe } from 'rxjs';
import { map, takeUntil, tap } from 'rxjs/operators';

import { HttpService } from '../core/services/http.service';

import { Company } from '../models/company';
import { Rocket } from '../models/rocket';
import { Capsule } from '../models/capsule';
import { Launch } from '../models/launch';
import { LaunchPad } from '../models/launchpad';
import { CoreDetail } from '../models/core_detail';
import { CapsuleDetail } from 'src/app/shared/models/CapsDetails';
import { CapsuleInfo } from '../shared/models/CapsuleInfo';

@Injectable({
  providedIn: 'root'
})

export class SpaceXAPIService {
  launches: Launch[];

  constructor(
    private restClient: HttpService 
  ) { }

  /**
   * Endpoint : Request on [Company]
   * 
   * @param {Object} filters 
   */
  public getCompany(filters): Observable<Company> {
    return this.restClient
      .fetch<Launch[]>(this.buildRequestURL('info', filters))
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
  public getCapsules(filters?: Object): Observable<CapsuleInfo[]> {
    return this.restClient
      .fetch<CapsuleInfo[]>(this.buildRequestURL('capsules', filters));
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
   * @param {Object|null} filters 
   */
  public getLaunches(filters?: Object) : Observable<Launch[]> {
    return this.restClient
      .fetch<Launch[]>(this.buildRequestURL('launches', filters));
  }

  /**
   * Endpoint : Request on [Detailed Capsule Data]
   * 
   * @param {Object} filters 
   */
  public getDetailedCapsuleData(filters): Observable<CapsuleDetail[]>{
    return this.restClient
      .fetch<Launch[]>(this.buildRequestURL('parts/caps', filters))
      .pipe(
        tap(console.log),
        map(data => data)
      )
  }
  
  /**
   * Endpoint : Request on [Detailed Core Data]
   * 
   * @param {Object} filters 
   */
  public getDetailedCoreData(filters): Observable<CoreDetail[]>{
    return this.restClient
      .fetch<Launch[]>(this.buildRequestURL('parts/cores', filters))
      .pipe(
        tap(console.log),
        map(data => data)
      )
  }

  /**
   * Build URL for API endpoint
   * 
   * @param {String} entity 
   * @param params 
   */
  private buildRequestURL(entity: String, params) {
    console.log(params);
    let requestUrl = entity;
    
    if (!params || typeof params.query_type === 'undefined') {
      return requestUrl;
    }

    if (params.query_type === 'all') {
      requestUrl = requestUrl + '/all';
    }

    if (params.query_type === 'latest') {
      requestUrl = requestUrl + '/latest';
    }

    if (params.query_type === 'upcoming') {
      requestUrl = requestUrl + '/upcoming';
    }

    if (params.query_type === 'entity') {
      let id = false;
      if (!this.isEmpty(params.queries.capsule_id)) {
        id = params.queries.capsule_id;
      } else if (!this.isEmpty(params.queries.launch_id)) {
        id = params.queries.launch_id;
      } else if (!this.isEmpty(params.queries.core_serial)) {
        id = params.queries.core_serial;
      }

      if (!id) {
        requestUrl = requestUrl;   
      } else {
        requestUrl = requestUrl + '/' + id;
      }
    }
    if (params.with_filter === true) {
      requestUrl = requestUrl + '?' + this.buildHttpParams(params.queries).toString();
    }

    console.log(requestUrl);

    return requestUrl;
  }

  isEmpty(mixed_var: any) {
    var undef, key, i, len;
    var emptyValues = [undef, null, false, 0, '', '0'];
    for (i = 0, len = emptyValues.length; i < len; i++)
      if (mixed_var === emptyValues[i])
        return true;
    if (typeof mixed_var === 'object') {
      for (key in mixed_var)
        return false;
      return true;
    }
    return false;
  };

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
