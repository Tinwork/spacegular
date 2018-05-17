import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';

// Pipe
import { KeysPipe } from './pipes/keys/keys.pipe';
import { TostringPipe } from './pipes/tostring/tostring.pipe';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule
  ],
  declarations: [
    KeysPipe,
    TostringPipe
  ],
  exports: [
    BrowserAnimationsModule,
    KeysPipe,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    TostringPipe
  ]
})
export class SharedModule { }
