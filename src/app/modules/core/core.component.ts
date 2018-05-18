import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SpaceXAPIService } from 'src/app/providers/space-xapi.service';
import { LaunchOptionFactory } from 'src/app/factories/launch_option_factory';
import { FactoryCard } from 'src/app/core/services/factory-card.service';
import { TinworkCard } from 'src/app/models/tinwork-card';
import { InputBuilderComponent } from 'src/app/modules/input-builder/input-builder.component';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent implements OnInit {

  launches: Array<TinworkCard>; 
  options: any; // TODO: add options from Core

  constructor(
    private factory: FactoryCard,
    private spaceXAPI: SpaceXAPIService,
    private optionFactory: LaunchOptionFactory,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.initCores();
    this.initOptions();
  }

  initCores() {
    // TODO: add core from SpaceX API
    // this.spaceXAPI.getCores().subscribe(
    //   (data: Core[]) => { // TODO: add Core Model
    //     this.launches = this.factory.normalize('launch', data)
    //   }
    // );
  }

  initOptions() {
      let factory = this.optionFactory.invoke(); // TODO: get correct list of options
      this.options = factory;
  }


  openDialog(): void {
    let dialogRef = this.dialog.open(InputBuilderComponent, {
      data: { option: this.options }
    });

    dialogRef.afterClosed().subscribe(result => {});
  }

}
