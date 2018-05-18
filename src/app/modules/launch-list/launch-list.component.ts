import { Component, OnInit } from '@angular/core';

import { SpaceXAPIService } from '../../providers/space-xapi.service';
import { Launch } from '../../models/launch';
import { LaunchOption } from '../../models/launch_option';
import { TinworkCard } from 'src/app/models/tinwork-card';
import { LaunchOptionFactory } from '../../factories/launch_option_factory';
import { FactoryCard } from 'src/app/core/services/factory-card.service'
import { MatDialog } from '@angular/material';
import { InputBuilderComponent } from '../input-builder/input-builder.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-launch-list',
  templateUrl: './launch-list.component.html',
  styleUrls: ['./launch-list.component.css']
})

export class LaunchListComponent implements OnInit {
  launches: Array<TinworkCard>; 
  options: LaunchOption[];
  private requestUrl = null;
  private params = {};

  constructor(
    private factory: FactoryCard,
    private spaceXAPI: SpaceXAPIService,
    private optionFactory: LaunchOptionFactory,
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.initRequestUrl();
    this.initLaunches();
    this.initOptions();
  }

  initRequestUrl() {
    this.requestUrl = this.router.url;
    let requestUrl = this.requestUrl.replace(/.*\?/gm, '?');
    let parts = requestUrl.substring(1).split('&');
    for (var i = 0; i < parts.length; i++) {
        var nv = parts[i].split('=');
        if (!nv[0] || nv[0] === true) continue;
        if (nv[1] === "") continue; 
        this.params[nv[0]] = nv[1] || true;
    }
  }

  initLaunches() {
    this.spaceXAPI.getLaunches({
      'query_type': 'all',
      'with_filter': true,
      'queries': this.params
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
