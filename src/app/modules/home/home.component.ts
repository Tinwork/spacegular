import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../core/services/http.service';

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
    this.http.fetch<any>('/latest').subscribe(
      (data: any) => console.log(data)
    );
  }
}
