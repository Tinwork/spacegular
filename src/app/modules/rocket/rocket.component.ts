import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { HttpService } from 'src/app/core/services/http.service';
import { RocketsInfo } from '../../shared/models/RocketsInfo';
import { FactoryCard } from '../../core/services/factory-card.service';
import { TinworkCard } from 'src/app/models/tinwork-card';
import { StoreService } from '../../core/services/store.service';

@Component({
  selector: 'app-rocket',
  templateUrl: './rocket.component.html',
  styleUrls: ['./rocket.component.css']
})
export class RocketComponent implements OnInit {

  rocket: RocketsInfo;
  rocketCard: TinworkCard;
  rocketID: String;
  technical: Object;

  // img path
  // @TODO remove duplication when have time...
  rocketsImg: any = {
    falcon1: 'https://img.bhs4.com/da/e/dae3480340b31e44a2840b6d65f68fb3bfacf4bc_large.jpg',
    falcon9: 'https://img.purch.com/w/660/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzA3NC8yMTIvb3JpZ2luYWwvc3BhY2V4LWZhbGNvbi05LWF0LXZhbmRlbmJlcmcuanBn',
    falconheavy: 'https://www.wraltechwire.com/wp-content/uploads/2018/01/Falcon-Heavy.jpg'
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpService,
    private factory: FactoryCard,
    private storeService: StoreService
  ) { }

  ngOnInit() {
    this.rocketID = this.route.snapshot.paramMap.get('id');
    this.getRocketById();
  }

  /**
   * Get Rocket By Id
   * 
   * @void
   */
  getRocketById() {
    if (typeof this.rocketID !== 'string') {
      return {};
    }

    const savedRocket = this.storeService.getStore();
    if (typeof savedRocket !== 'undefined' && this.isRocket(savedRocket)) {
      this.setRocketData(savedRocket);
      return;
    } 

    this.http.fetch<RocketsInfo>(`rockets/${this.rocketID}`)
      .subscribe(
        (data: RocketsInfo) => this.setRocketData(data),
        (err: any) => console.log(err)
      );
  }

  /**
   * Is Rocket
   * 
   * @param {Any} data
   * @return {Boolean} 
   */
  isRocket(data: any): Boolean {
    return (<RocketsInfo>data).first_stage !== undefined;
  }

  /**
   * Set Rocket Data
   * 
   * @param {RocketsInfo} data 
   */
  setRocketData(data: RocketsInfo) {
    this.rocket = data;
    this.setTechnicalData(data);
    const rocketCopy = this.setImg(data);
    this.rocketCard = this.factory.normalize('rocket', [rocketCopy])[0];
  }

  /**
   * Set Img
   * 
   * @TODO remove duplication and put it in a provider
   * @param {String} id
   * @return {RocketsInfo} rocketCopy
   */
  setImg(rocket: RocketsInfo) {
    if (typeof rocket === 'undefined')
      return rocket;

    const jsonRocket = JSON.stringify(rocket);
    const rocketCopy = JSON.parse(jsonRocket);
    rocketCopy.image = this.rocketsImg[rocketCopy.id];

    return rocketCopy;
  }

  /**
   * Set Technical Info
   * 
   * @param {RocketInfo} rocket 
   */
  setTechnicalData(rocket: RocketsInfo) {
    this.technical = {
      height: rocket.height,
      diameter: rocket.diameter,
      mass: rocket.mass
    };
  }

}
