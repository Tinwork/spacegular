import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SpaceXAPIService } from 'src/app/providers/space-xapi.service';
import { LaunchOptionFactory } from 'src/app/factories/launch_option_factory';
import { FactoryCard } from 'src/app/core/services/factory-card.service';
import { TinworkCard } from 'src/app/models/tinwork-card';
import { InputBuilderComponent } from 'src/app/modules/input-builder/input-builder.component';
import { CoreDetail } from 'src/app/models/core_detail';
import { Router } from '@angular/router';


@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent implements OnInit {

  cores: Array<TinworkCard>; 
  private options: any = {}; // TODO: add options from Core
  private requestUrl = null;

  constructor(
    private factory: FactoryCard,
    private spaceXAPI: SpaceXAPIService,
    private optionFactory: LaunchOptionFactory,
    public dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit() {
    this.initRequestUrl();
    this.initCores(null);
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
        this.options[nv[0]] = nv[1] || true;
    }
  }

  initCores(filter: any) {
    // TODO: add core from SpaceX API
    this.spaceXAPI.getDetailedCoreData({
      'query_type': 'entity',
      'with_filter': false,
      'queries': this.options
    }).subscribe(
      (data: CoreDetail[]) => {
        this.cores = this.factory.normalize('core', data)
      }
    );
  }

  initOptions() {
      let factory = this.optionFactory.invoke(); // TODO: get correct list of options
      this.options = factory;
  }


  openDialog(): void {
    let dialogRef = this.dialog.open(InputBuilderComponent, {
      data: { option: this.options }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

}
