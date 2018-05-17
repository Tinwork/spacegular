import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  template: `
    <mat-drawer-container class="example-container" autosize>
      <mat-drawer #drawer class="example-sidenav" mode="side" [opened]="open">
        <mat-list>
          <mat-list-item *ngFor="let item of items">
            <mat-icon>{{item.icon}}</mat-icon>
            <a routerLink="/{{item.url}}" routerLinkActive="active">{{item.url}}</a>
          </mat-list-item>
        </mat-list>
      </mat-drawer>

      <div class="example-sidenav-content">
        <router-outlet></router-outlet>
      </div>
    </mat-drawer-container>
  `,
  styles: [
    'mat-icon { color: white; padding-right: 10px; }'
  ]
})
export class SidebarComponent implements OnInit {

  @Input()
  public items: Array<any>;

  @Input()
  public open: Boolean;

  constructor() {}

  ngOnInit() {
  }
}
