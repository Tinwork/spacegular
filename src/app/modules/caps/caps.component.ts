import { Component, OnInit } from '@angular/core';
import { SpaceXAPIService } from '../../providers/space-xapi.service';
import { CapsuleDetail } from 'src/app/shared/models/CapsDetails';
import { CapsuleDetailOption } from 'src/app/shared/models/capsule_detail_option';

import { MatDialog } from '@angular/material';
import { InputBuilderComponent } from '../input-builder/input-builder.component';

@Component({
  selector: 'app-caps',
  templateUrl: './caps.component.html',
  styleUrls: ['./caps.component.css']
})
export class CapsComponent implements OnInit {

  public capsules: Array<CapsuleDetail>;
  public options: CapsuleDetailOption[];


  constructor(
    private spaceXAPI: SpaceXAPIService,
    public dialog: MatDialog,
    private optionFactory: CapsuleDetailOptionFactory,
  ) { }

  ngOnInit() {
  }

  /**
   * Get Caps
   * 
   * @param {Object} filteredQuery
   */
  getCaps(filteredQuery: any) {
    this.spaceXAPI.getDetailedCapsuleData(filteredQuery).subscribe(
      (data: Array<CapsuleDetail>) =>  {
        this.capsules = data;
      },
      (err: any) => console.log(err)
    );
  }

  /**
   * Init Options
   */
  initOptions() {
    let factory = this.optionFactory.invoke();
    this.options = factory;
  }

  /**
   * Open Dialog
   */
  openDialog(): void {
    let dialogRef = this.dialog.open(InputBuilderComponent, {
      data: { option: this.options }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

}
