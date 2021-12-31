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

const appRoutes: Routes = [
  {path : "", component: getstartedComponent},
  {path : "demologin", component: demologinComponent},
  {path: "demoregister", component: demoregisterComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    demoregisterComponent,
    demologinComponent,
    demoforgotComponent,
    demochangeComponent,
    getstartedComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
