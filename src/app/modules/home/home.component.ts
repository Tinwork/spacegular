import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';
import { LaunchesInfo } from 'src/app/shared/models/LaunchesInfo';
import { RocketsInfo } from 'src/app/shared/models/RocketsInfo';
import { TinworkCard } from 'src/app/models/tinwork-card';
import { FactoryCard } from 'src/app/core/services/factory-card.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  rockets: Array<TinworkCard>;
  // img path
  rocketsImg: any = {
    falcon1: 'https://spaceflightnow.com/falcon/003/images/falcon1launch.jpg',
    falcon9: 'https://img.purch.com/w/660/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzA3NC8yMTIvb3JpZ2luYWwvc3BhY2V4LWZhbGNvbi05LWF0LXZhbmRlbmJlcmcuanBn',
    falconheavy: 'https://www.wraltechwire.com/wp-content/uploads/2018/01/Falcon-Heavy.jpg'
  };
  // action type on click

  constructor(
    private http: HttpService,
    private factory: FactoryCard
  ) { }

  ngOnInit() {
    this.getRocketsData();
  }

  /**
   * Get Rockets Data
   * 
   * @void
   */
  getRocketsData() {
    this.http.fetch<RocketsInfo[]>('rockets').subscribe(
      (data: RocketsInfo[]) => { 
        const aggregateData = this.setImg(data);
        const actions = this.getCardActions(data);
        console.log(actions)
        this.rockets = this.factory.normalize('rocket', aggregateData, actions);
      },
      (err: any) => console.log(err)
    );
  }

  /**
   * Set Img
   * 
   * @param {String} id
   * @return {String} url
   */
  setImg(rockets: Array<RocketsInfo>) {
    const rocketsCopy = rockets.slice(0);

    rocketsCopy.map(r => {
      r.image = this.rocketsImg[r.id];
    });

    return rocketsCopy;
  }

  /**
   * Get Card Actions
   * 
   * @param {Array<RocketsInfo>} rockets
   * @return {Array<any>}
   */
  getCardActions(rockets: Array<RocketsInfo>): Array<Array<any>> {
    return rockets.map(r => {
      return [
        {
          label: 'see more',
          id: r.id,
          type: 'link',
          data: r,
          baseUrl: 'rocket'
        }
      ];
    });
  }
}
