import { Component, OnInit } from '@angular/core';

import { Launch } from '../../models/launch';
import { SpaceXAPIService } from '../../providers/space-xapi.service';

@Component({
  selector: 'app-launch-list',
  templateUrl: './launch-list.component.html',
  styleUrls: ['./launch-list.component.css']
})

export class LaunchListComponent implements OnInit {
  launches: Launch[]; 

  constructor(
    private spaceXAPI: SpaceXAPIService
  ) { }

  ngOnInit() {
    this.initLaunches();
  }

  initLaunches() {
    this.spaceXAPI.getLaunches({
      'query_type': 'all',
      'with_filter': false,
      'queries': {
        'flight_number': [1, 2, 3]
      } 
    }).subscribe(
      (data: Launch[]) => this.launches = data
    );
  }
}
