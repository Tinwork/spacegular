import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../core/services/http.service';
import { CapsuleInfo, LaunchPayloadMass, LaunchPayloadVol, ReturnPayloadVol } from '../../shared/models/CapsuleInfo';
import { FactoryCard } from 'src/app/core/services/factory-card.service';
import { TinworkCard } from 'src/app/models/tinwork-card';
import { CapsuleDetailOption } from '../../models/capsule_detail_option';
import { CapsuleDetailOptionFactory } from '../../factories/capsule_detail_option_factory';
import { SpaceXAPIService } from '../../providers/space-xapi.service';
import { MatDialog } from '@angular/material';
import { InputBuilderComponent } from '../input-builder/input-builder.component';
import { Router } from '@angular/router';
import { isArray } from 'util';

@Component({
  selector: 'app-capsule',
  templateUrl: './capsule.component.html',
  styleUrls: ['./capsule.component.css']
})
export class CapsuleComponent implements OnInit {
  private requestUrl = null;
  private params = {};
  capsules: Array<CapsuleInfo> = [];
  cardData: Array<TinworkCard> = [];
  capsulesImg: any = {
    dragon1: 'http://www.spacex.com/sites/spacex/files/images/dragon/tabs/dragon-lab.jpg',
    dragon2: 'https://lh3.googleusercontent.com/-xjQoNhElosE/VqhgnYbaA-I/AAAAAAAAOI0/XsPIVpDKdE4/w3840-h2160/D2%2BLanding.jpg',
    crewdragon: 'https://mk0spaceflightnoa02a.kinstacdn.com/wp-content/uploads/2016/07/crewdragon1.jpg'
  };
  options: CapsuleDetailOption[];

  constructor(
    private http: HttpService,
    private factory: FactoryCard,
    private spaceXAPI: SpaceXAPIService,
    private optionFactory: CapsuleDetailOptionFactory,
    private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.initRequestUrl();
    this.getAllCapsule();
    this.initOptions();
  }

  initRequestUrl() {
    this.requestUrl = this.router.url;
    let requestUrl = this.requestUrl.replace(/.*\?/gm, '?');
    let parts = requestUrl.substring(1).split('&');
    for (var i = 0; i < parts.length; i++) {
        var nv = parts[i].split('=');
        console.log(nv);
        if (!nv[0] || nv[0] === true) continue;
        if (nv[1] === true) continue; 
        this.params[nv[0]] = nv[1] || true;
    }
  }

  /**
   * Get All Capsule
   * 
   * @void
   */
  getAllCapsule() {
    this.spaceXAPI.getCapsules({
      'query_type': 'entity',
      'with_filter': false,
      'queries': this.params 
    }).subscribe(
      (res: any) => {
        if (!isArray(res)) {
          res = [res];
        } 
        this.capsules = res;
        // update capsuleinfo to add the image on it
        const aggregateCapsule = this.setCapsuleImg(res);
        this.cardData = this.factory.normalize('capsule', aggregateCapsule);
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
   * @return {Array<CapsuleInfo>} 
   */
  setCapsuleImg(capsules: Array<CapsuleInfo>) {
    const capsulesCopy = capsules.slice(0);
    return capsulesCopy.map(capsule => {
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
 
  initOptions() {
      let factory = this.optionFactory.invoke();
      this.options = factory;
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(InputBuilderComponent, {
      data: { option: this.options }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
