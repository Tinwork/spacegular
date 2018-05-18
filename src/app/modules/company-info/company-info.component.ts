import { Component, OnInit } from '@angular/core';
import { SpaceXAPIService } from 'src/app/providers/space-xapi.service';
import { Company } from '../../models/company';

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.css']
})
export class CompanyInfoComponent implements OnInit {
  companyInfo: Company

  constructor(
    private spaceXAPI: SpaceXAPIService,
  ) { }

  ngOnInit() {
    this.initLaunches();
  }

  initLaunches() {
    this.spaceXAPI.getCompany({}).subscribe(
      (data: Company) => {
        this.companyInfo = data
      }
    );
  }

}
