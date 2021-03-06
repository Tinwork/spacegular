import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { NgHttpLoaderModule } from 'ng-http-loader/ng-http-loader.module';
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
import { CoreComponent } from 'src/app/modules/core/core.component'
import { CompanyInfoComponent } from 'src/app/modules/company-info/company-info.component'

import { AgmCoreModule } from '@agm/core';
import { CapsComponent } from '../caps/caps.component';

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
    TinworkCardActionComponent,
    CapsComponent,
    CoreComponent, 
    CompanyInfoComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpClientModule,
    NgHttpLoaderModule,
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
