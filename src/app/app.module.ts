import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEmployeComponent } from './add-employe/add-employe.component';
import { SearchEmployeComponent } from './search-employe/search-employe.component';
import { EmployeDeleteComponent } from './employe-delete/employe-delete.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';

const myroutes=[{path:"",component:AddEmployeComponent},
{path:"employedelete",component:EmployeDeleteComponent},
{path:"searchemploye",component:SearchEmployeComponent}]


@NgModule({
  declarations: [
    AppComponent,
    AddEmployeComponent,
    SearchEmployeComponent,
    EmployeDeleteComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myroutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
