import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { createCustomElement } from '@angular/elements';


import { AppComponent } from './app.component';
import { RoutingModule } from '../routing/routing.module';
import { HomeComponent } from '../home/home.component';
import { SharedModule } from '../../shared/shared.module';
import { SidebarComponent } from '../../shared/components/sidebar/sidebar.component';
import { LaunchComponent } from '../launch/launch.component';
import { CapsuleComponent } from '../capsule/capsule.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    LaunchComponent,
    CapsuleComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpClientModule,
    SharedModule,
  ],
  entryComponents: [
    SidebarComponent
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
