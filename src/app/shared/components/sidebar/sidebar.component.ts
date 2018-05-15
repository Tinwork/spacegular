import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  template: `
    <mat-sidenav-container class="mat-container">
      <mat-sidenav-content>
        <mat-list>
          <mat-list-item *ngFor="let company of companies">{{company.name}}</mat-list-item>
        </mat-list>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styles: [

  ]
})
export class SidebarComponent implements OnInit {

  @Input()
  public companies: Array<any>;

  constructor() { }

  ngOnInit() {
    console.log(this.companies);
  }

  handleClick() {
    console.log('click');
  }
}
