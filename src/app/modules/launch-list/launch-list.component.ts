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
      'query_type': 'upcoming',
      'queries': {
        'flight_number': 51,
        'id': 1123456789,
        'param2': 'yo'
      }
    }).subscribe(
      (data: Launch[]) => this.launches = data
    );
  }
}
