import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  template: `
    <mat-drawer-container class="example-container" autosize>
      <mat-drawer #drawer class="example-sidenav" mode="side" [opened]="open">
        <mat-list>
          <mat-list-item *ngFor="let item of items">{{item}}</mat-list-item>
        </mat-list>
      </mat-drawer>

      <div class="example-sidenav-content">
      </div>
    </mat-drawer-container>
  `,
  styles: [

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
