import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../core/services/http.service';
import { CapsuleInfo, LaunchPayloadMass, LaunchPayloadVol, ReturnPayloadVol } from '../../shared/models/CapsuleInfo';
import { FactoryCard } from '../../core/services/factory-card.service';
import { TinworkCard } from 'src/app/models/tinwork-card';

@Component({
  selector: 'app-capsule',
  templateUrl: './capsule.component.html',
  styleUrls: ['./capsule.component.css']
})
export class CapsuleComponent implements OnInit {

  capsules: Array<CapsuleInfo> = [];
  cardData: Array<TinworkCard> = [];
  capsulesImg: any = {
    dragon1: 'http://www.spacex.com/sites/spacex/files/images/dragon/tabs/dragon-lab.jpg',
    dragon2: 'https://lh3.googleusercontent.com/-xjQoNhElosE/VqhgnYbaA-I/AAAAAAAAOI0/XsPIVpDKdE4/w3840-h2160/D2%2BLanding.jpg',
    crewdragon: 'https://mk0spaceflightnoa02a.kinstacdn.com/wp-content/uploads/2016/07/crewdragon1.jpg'
  };

  constructor(
    private http: HttpService,
    private cardFactory: FactoryCard
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
          this.capsules = res;
          // update capsuleinfo to add the image on it
          this.setCapsuleImg(res);
          this.cardData = this.cardFactory.normalize('capsule', res);
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
  setCapsuleImg(capsules: Array<CapsuleInfo>) {
    return capsules.map(capsule => {
      capsule.image = this.capsulesImg[capsule.id];

      return capsule;
    });
  }

  /**
   * Get Payload Data
   * 
   * @param {String} id
   * @return {Object} merge  
   */
  getPayloadData(id: String) {
    const capsule = this.capsules.filter(c => c.id === id);

    if (capsule.length === 0) {
      return {};
    }

    const payload = {
      ...capsule[0].launch_payload_mass,
      ...capsule[0].launch_payload_vol,
      return_kg: capsule[0].return_payload_mass.kg,
      return_lb: capsule[0].return_payload_mass.lb
    };

    return payload;
  }
}
