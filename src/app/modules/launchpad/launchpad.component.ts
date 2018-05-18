import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';
import { LaunchpadInfo } from 'src/app/shared/models/LaunchpadInfo';
import { FactoryCard } from 'src/app/core/services/factory-card.service';
import { TinworkCard } from 'src/app/models/tinwork-card';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-launchpad',
  templateUrl: './launchpad.component.html',
  styleUrls: ['./launchpad.component.css']
})
export class LaunchpadComponent implements OnInit {

  // private fields
  private launchPads: Array<LaunchpadInfo>;
  private launchPadId: String;

  // public fields
  public launchPadList: Array<String>;
  public launchPad: LaunchpadInfo;
  public launchPadCard: Array<TinworkCard>


  constructor(
    private http: HttpService,
    private factory: FactoryCard,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.launchPadId = this.route.snapshot.paramMap.get('id');
    this.getLaunchPad();
  }

  /**
   * Get Launch Pad
   * 
   * @void
   */
  getLaunchPad() {
    this.http.fetch<Array<LaunchpadInfo>>('launchpads').subscribe(
      (data: Array<LaunchpadInfo>) => {
        this.launchPads = data;
        this.launchPadList = this.getLaunchPadList();
        // set a default launchpad
        this.launchPadId =  this.launchPadId || data[0].id;
        this.updateLaunchpad();
      },
      (err: any) => console.log(err)
    );
  }

  /**
   * Update Launch Pad
   *    Update the launch pad public Object when the user change the select value
   * 
   * @void
   */
  updateLaunchpad() {
    console.log(this.launchPadId)
    for (let idx = 0; idx < this.launchPads.length; idx++) {
      if (this.launchPads[idx].id === this.launchPadId) {
        this.launchPad = this.launchPads[idx];
      }
    }

    // trigger the update of the view
    this.updateViewPadData();
  }

  /**
   * Get Launch Pad List
   * 
   * @return {Array<String>}
   */
  getLaunchPadList() {
    return this.launchPads.map(pad => {
      return pad.id;
    });
  }

  /**
   * Update View Pad Data
   */
  updateViewPadData() {
    this.launchPadCard = this.factory.normalize('launchpad', [this.launchPad]);
  }

  /**
   * Filter Click
   *
   * @param {Any|EventEmitter} e
   */
  filterClick(e: any) {
    if (typeof e.value === 'string') {
      this.launchPadId = e.value;
      this.updateLaunchpad();
    }
  }
}
