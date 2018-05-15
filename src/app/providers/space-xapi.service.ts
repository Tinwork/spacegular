import { Injectable } from '@angular/core';

import { HttpService } from '../core/services/http.service';
import { Observable } from 'rxjs';

import { Launch } from '../models/launch';
import { Option } from '../models/option';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class SpaceXAPIService {
  launches: Launch[];

  constructor(
    private restClient: HttpService 
  ) { }

  /**
   * 
   * @param {Object} filters 
   */
  public getLaunches(filters){
    let options: Option;
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
