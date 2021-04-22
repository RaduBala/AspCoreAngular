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
import { DeviceNewComponent } from './device-new/device-new.component';
import { DevicesListComponent } from './devices-list/devices-list.component';
import { AssignDeviceComponent } from './assign-device/assign-device.component';
import { EmployeeViewComponent } from './employee-view/employee-view.component';
import { DeviceService } from './services/device.service';
import { LoginComponent } from './login/login.component';
import { UserService } from './services/user.service';
import { TokenService } from './services/token.service';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    EmployeesListComponent,
    EmployeeNewComponent,
    DeviceNewComponent,
    DevicesListComponent,
    AssignDeviceComponent,
    EmployeeViewComponent,
    LoginComponent,
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
      { path: 'device/all', component: DevicesListComponent },
      { path: 'device/new', component: DeviceNewComponent },
      { path: 'device/assign', component: AssignDeviceComponent },
      { path: 'login', component: LoginComponent },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
    ])
  ],
  providers: [
    EmployeeService,
    DeviceService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
