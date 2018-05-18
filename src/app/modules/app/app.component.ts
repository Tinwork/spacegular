import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../core/services/http.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  deploy = false;
  sidebarData: Array<Object> = [];

  constructor(
    private http: HttpService
  ) { }

  ngOnInit(): void {
    this.setSidebarData();
  }

  /**
   * Set Sidebar Data
   * 
   * @void
   */
  setSidebarData() {
    this.sidebarData = [
      { url: 'home', icon: 'home' },
      { url: 'capsules', icon: 'eject' },
      { url: 'caps', icon: 'event_seat' },
      { url: 'launches', icon: 'launch' },
      { url: 'launchpad', icon: 'gamepad' }
    ];
  }

  /**
   * Sidebar On Click
   * 
   * @public
   */
  sidebarOnClick() {
    this.deploy = !this.deploy;
  }
}