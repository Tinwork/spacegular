import { Component, OnInit } from '@angular/core';
import { SpaceXAPIService } from '../../providers/space-xapi.service';
import { CapsuleDetail } from 'src/app/shared/models/CapsDetails';
import { CapsuleDetailOption } from 'src/app/shared/models/capsule_detail_option';

import { MatDialog } from '@angular/material';
import { InputBuilderComponent } from '../input-builder/input-builder.component';
import { CapsuleDetailOptionFactory } from 'src/app/factories/capsule_detail_option_factory';
import { FactoryCard } from '../../core/services/factory-card.service';
import { TinworkCard } from 'src/app/models/tinwork-card';

@Component({
  selector: 'app-caps',
  templateUrl: './caps.component.html',
  styleUrls: ['./caps.component.css']
})
export class CapsComponent implements OnInit {

  public capsules: Array<CapsuleDetail>;
  public options: CapsuleDetailOption[];
  public tinworkCapsules: Array<TinworkCard>;

  // @TODO remove duplication...
  private capsulesImg: any = {
    dragon1: 'http://www.spacex.com/sites/spacex/files/images/dragon/tabs/dragon-lab.jpg',
    dragon2: 'https://lh3.googleusercontent.com/-xjQoNhElosE/VqhgnYbaA-I/AAAAAAAAOI0/XsPIVpDKdE4/w3840-h2160/D2%2BLanding.jpg',
    crewdragon: 'https://mk0spaceflightnoa02a.kinstacdn.com/wp-content/uploads/2016/07/crewdragon1.jpg'
  };


  constructor(
    private spaceXAPI: SpaceXAPIService,
    public dialog: MatDialog,
    private optionFactory: CapsuleDetailOptionFactory,
    private factory: FactoryCard
  ) { }

  ngOnInit() {
    this.getCaps(null);
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
        this.updateCardData(data);
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

  /**
   * Update Card Data
   */
  updateCardData(capsules: Array<CapsuleDetail>) {
    const capsulesTmpl = this.factory.normalize('caps', capsules);
    capsulesTmpl.map((c, idx) => {
      c.image = this.capsulesImg[capsules[idx].capsule_id];
    });

    this.tinworkCapsules = capsulesTmpl;
  }

}
