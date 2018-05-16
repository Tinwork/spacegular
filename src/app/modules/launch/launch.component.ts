import { Component, OnInit } from '@angular/core';

import { Launch } from '../../models/launch';
import { LaunchOption } from '../../models/launch_option';
import { SpaceXAPIService } from '../../providers/space-xapi.service';

@Component({
  selector: 'app-launch',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.css']
})

export class LaunchComponent implements OnInit {
  url = 'test';
  launches: Launch[]; 
  options: LaunchOption

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
