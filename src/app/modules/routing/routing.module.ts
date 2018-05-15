import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../app/app.component';
import { HomeComponent } from '../home/home.component';

/**
 * @TODO enable LaunchComponent when ready
 */
const routes: Routes = [
  { path: '', component: HomeComponent },
// { path: '', component: LaunchComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes
    )
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutingModule { }
