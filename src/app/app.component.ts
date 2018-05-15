import { Component, OnInit } from '@angular/core';
import { SpacexApiService } from './Providers/Backend/spacex-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(
    private spacexApi: SpacexApiService
  ) { }

  ngOnInit(): void {
    this.spacexApi.getCompanyInfo().subscribe(data => {
      console.log(JSON.stringify(data))
    })
  }
}
