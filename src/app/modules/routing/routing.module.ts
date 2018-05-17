import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../app/app.component';
import { HomeComponent } from '../home/home.component';
import { CapsuleComponent } from '../capsule/capsule.component';
import { LaunchListComponent } from '../launch-list/launch-list.component';
import { RocketComponent } from '../rocket/rocket.component';

/**
 * @TODO enable LaunchComponent when ready
 */
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'capsules', component: CapsuleComponent},
  { path: 'launches', component: LaunchListComponent },
  { path: 'rocket/:id', component: RocketComponent }
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
