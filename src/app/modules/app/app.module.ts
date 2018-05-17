import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { createCustomElement } from '@angular/elements';


import { AppComponent } from './app.component';
import { RoutingModule } from '../routing/routing.module';
import { HomeComponent } from '../home/home.component';
import { SharedModule } from '../../shared/shared.module';
import { SidebarComponent } from '../../shared/components/sidebar/sidebar.component';
import { InputBuilderComponent } from '../input-builder/input-builder.component';
import { CapsuleComponent } from '../capsule/capsule.component';
import { CardComponent } from '../../shared/components/card/card.component';
import { TinworkCardComponent } from '../../shared/components/tinwork-card/tinwork-card.component';
import { LaunchListComponent } from '../launch-list/launch-list.component';
import { RocketComponent } from '../rocket/rocket.component';
import { TinworkCardActionComponent } from 'src/app/shared/components/tinwork-card-action/tinwork-card-action.component';
import { LaunchpadComponent } from '../launchpad/launchpad.component';

import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    InputBuilderComponent,
    CapsuleComponent,
    CardComponent,
    LaunchListComponent,
    LaunchpadComponent,
    RocketComponent,
    TinworkCardComponent,
    TinworkCardActionComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpClientModule,
    SharedModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDgIM7Hcp_ITaYxN3oUTUyJE-cnS-7cTeE'
    })
  ],
  entryComponents: [
    SidebarComponent,
    CardComponent,
    TinworkCardComponent,
    TinworkCardActionComponent,
    InputBuilderComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(
    private injector: Injector
  ) {
  }
}
