import { NgModule } from '@angular/core';
import {AppComponent} from './app.component'
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule, Routes} from "@angular/router";
import {homeComponent} from "./home/home.component";
import {categoryComponent} from "./category/category.component";
import {demologinComponent} from "./demologin/demologin.component";
import {demoregisterComponent} from "./demoregister/demoregister.component";
import {demoforgotComponent} from "./demoforgot/demoforgot.component";
import {demochangeComponent} from "./demochange/demochange.component";
import {FormsModule} from "@angular/forms";
import {getstartedComponent} from "./getstarted/getstarted.component";
import {registerComponent} from "../regiter/register.component";
import {assignment3Component} from "./assignment3/assignment3.component";
import {weatherComponent} from "./weather/weather.component";
import {HttpClientModule} from "@angular/common/http";
import {demoweatherComponent} from "./assignment4/demoweather.component";
import {practicalComponent} from "./practical/practical.component";
import {creatComponent} from "./practical/creat/creat.component";

const appRoutes: Routes = [
  {path : "", component: practicalComponent},
  {path : "creat", component: creatComponent},
  {path: "demoregister", component: demoregisterComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    assignment3Component,
    registerComponent,
    weatherComponent,
    demoweatherComponent,
    practicalComponent,
    creatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
