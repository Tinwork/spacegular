import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatListModule,
    MatIconModule
  ],
  declarations: [],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatListModule,
    MatIconModule
  ]
})
export class SharedModule { }
