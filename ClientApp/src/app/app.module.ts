import { EmployeeService } from './services/employee.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeeNewComponent } from './employee-new/employee-new.component';
import { LaptopNewComponent } from './laptop-new/laptop-new.component';
import { LaptopsListComponent } from './laptops-list/laptops-list.component';
import { AssignLaptopComponent } from './assign-laptop/assign-laptop.component';
import { EmployeeViewComponent } from './employee-view/employee-view.component';
import { DeviceService } from './services/device.service';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    EmployeesListComponent,
    EmployeeNewComponent,
    LaptopNewComponent,
    LaptopsListComponent,
    AssignLaptopComponent,
    EmployeeViewComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'employee/all', component: EmployeesListComponent },
      { path: 'employee/new', component: EmployeeNewComponent },
      { path: 'employee/view', component: EmployeeViewComponent },
      { path: 'device/all', component: LaptopsListComponent },
      { path: 'device/new', component: LaptopNewComponent },
      { path: 'device/assign', component: AssignLaptopComponent },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
    ])
  ],
  providers: [
    EmployeeService,
    DeviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }