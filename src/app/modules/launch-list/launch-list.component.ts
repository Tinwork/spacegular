import { Component, OnInit } from '@angular/core';

import { SpaceXAPIService } from '../../providers/space-xapi.service';
import { Launch } from '../../models/launch';
import { LaunchOption } from '../../models/launch_option';
import { TinworkCard } from 'src/app/models/tinwork-card';
import { LaunchOptionFactory } from '../../factories/launch_option_factory';
import { FactoryCard } from 'src/app/core/services/factory-card.service'
import { MatDialog } from '@angular/material';
import { InputBuilderComponent } from '../input-builder/input-builder.component';

@Component({
  selector: 'app-launch-list',
  templateUrl: './launch-list.component.html',
  styleUrls: ['./launch-list.component.css']
})

export class LaunchListComponent implements OnInit {
  launches: Array<TinworkCard>; 
  options: LaunchOption[];

  constructor(
    private factory: FactoryCard,
    private spaceXAPI: SpaceXAPIService,
    private optionFactory: LaunchOptionFactory,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.initLaunches();
    this.initOptions();
  }

  initLaunches() {
    this.spaceXAPI.getLaunches({
      'query_type': 'upcoming',
      'with_filter': false,
      'queries': {
        'flight_number': [1, 2, 3]
      } 
    }).subscribe(
      (data: Launch[]) => {
        this.launches = this.factory.normalize('launch', data)
      }
    );
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
