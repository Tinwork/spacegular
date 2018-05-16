import { Component, OnInit, Input } from '@angular/core';

import { Launch } from '../../models/launch';
import { LaunchOption } from '../../models/launch_option';
import { SpaceXAPIService } from '../../providers/space-xapi.service';

@Component({
  selector: 'app-launch',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.css']
})

export class LaunchComponent implements OnInit {
  @Input() launch: Launch; 

  constructor(
  ) { }

  ngOnInit() {
  }
}
