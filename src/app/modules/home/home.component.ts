import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../core/services/http.service';
import { LaunchesInfo } from 'src/app/shared/models/LaunchesInfo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private http: HttpService
  ) { }

  ngOnInit() {
    this.http.fetch<LaunchesInfo>('/launches/latest').subscribe(
      (data: LaunchesInfo) => console.log(data)
    );
  }
}
