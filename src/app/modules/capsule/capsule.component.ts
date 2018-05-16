import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../core/services/http.service';
import { CapsuleInfo } from '../../shared/models/CapsuleInfo';

@Component({
  selector: 'app-capsule',
  templateUrl: './capsule.component.html',
  styleUrls: ['./capsule.component.css']
})
export class CapsuleComponent implements OnInit {

  capsules: Array<CapsuleInfo> = [];
  capsulesImg: any = {
    dragon1: 'http://www.spacex.com/sites/all/themes/spacex2012/images/dragon2/spacecraft.png',
    dragon2: 'https://lh3.googleusercontent.com/-xjQoNhElosE/VqhgnYbaA-I/AAAAAAAAOI0/XsPIVpDKdE4/w3840-h2160/D2%2BLanding.jpg'
  };

  constructor(
    private http: HttpService
  ) { }

  ngOnInit() {
    this.getAllCapsule();
  }

  /**
   * Get All Capsule
   * 
   * @void
   */
  getAllCapsule() {
    this.http.fetch<Array<CapsuleInfo>>('capsules')
      .subscribe(
        (res: Array<CapsuleInfo>) => {
          console.log('success');
          this.capsules = res;
        },
        (err: any) => {
          console.log(err);
        }
      );
  }

  /**
   * Get Capsule Img
   * 
   * @param {String} capsuleID 
   * @return {String} url
   */
  getCapsuleImg(capsuleID: String) {
    let url = '';
    Object.keys(this.capsulesImg).forEach(c => {
      if (c === capsuleID) {
        url = this.capsulesImg[c];
      }
    });

    return url;
  }

  /**
   * Filter Capsule
   */
  filterCapsule(criteria) {

  }
}
