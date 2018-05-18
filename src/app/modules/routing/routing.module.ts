import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../app/app.component';
import { HomeComponent } from '../home/home.component';
import { CapsuleComponent } from '../capsule/capsule.component';
import { LaunchListComponent } from '../launch-list/launch-list.component';
import { CapsComponent } from '../caps/caps.component';
import { CoreComponent } from 'src/app/modules/core/core.component'
import { LaunchpadComponent } from 'src/app/modules/launchpad/launchpad.component'
import { RocketComponent } from 'src/app/modules/rocket/rocket.component'

/**
 * @TODO enable LaunchComponent when ready
 */
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'capsules', component: CapsuleComponent},
  { path: 'launches', component: LaunchListComponent },
  { path: 'launchpad', component: LaunchpadComponent },
  { path: 'launchpad/:id', component: LaunchpadComponent },
  { path: 'caps', component: CapsComponent },
  { path: 'rocket/:id', component: RocketComponent },
  { path: 'cores', component: CoreComponent }
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
