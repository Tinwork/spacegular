import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../core/services/http.service';
import { LaunchesInfo } from 'src/app/shared/models/LaunchesInfo';
import { RocketsInfo } from '../../shared/models/RocketsInfo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  rockets: RocketsInfo[];
  // img path
  rocketsImg: any = {
    falcon1: 'https://img.bhs4.com/da/e/dae3480340b31e44a2840b6d65f68fb3bfacf4bc_large.jpg',
    falcon9: 'http://www.spacex.com/sites/spacex/files/mini-falcon2.png',
    falconHeavy: 'https://www.wraltechwire.com/wp-content/uploads/2018/01/Falcon-Heavy.jpg'
  };

  constructor(
    private http: HttpService
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
      (data: RocketsInfo[]) => this.rockets = data,
      (err: any) => console.log(err)
    );
  }

  /**
   * Get Img By Id
   * 
   * @param {String} id
   * @return {String} url
   */
  getImgById(id: String) {
    let url = '';
    Object.keys(this.rocketsImg).forEach(i => {
      if (i === id) {
        url = this.rocketsImg[i];
      }
    });

    return url;
  }
}
