import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../core/services/http.service';

@Component({
  selector: 'app-capsule',
  templateUrl: './capsule.component.html',
  styleUrls: ['./capsule.component.css']
})
export class CapsuleComponent implements OnInit {

  constructor(
    private http: HttpService
  ) { }

  ngOnInit() {
  }

  
  getAllCapsule() {

  }

  filterCapsule() {

  }

}
