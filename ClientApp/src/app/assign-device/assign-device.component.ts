import { DeviceService } from '../services/device.service';
import { Employee } from '../models/employee';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Device } from '../models/device';

@Component({
  selector: 'app-assign-device',
  templateUrl: './assign-device.component.html',
  styleUrls: ['./assign-device.component.css']
})

export class AssignDeviceComponent implements OnInit
{
    devices: Device[] ;

    employees: Employee[];

    employee: Employee =
    {
      id: null,
      name: "",
      devices: null
    };

    device: Device =
    {
        id: null,
        name: "",
        employeeId: null,
    }

    deviceId: number ;

    devicesNames: string[] = [] ;

    searchedName: string ;

    constructor(private employeeService: EmployeeService, private deviceService: DeviceService) 
    { 
      
    }

    ngOnInit() 
    {
        this.employeeService.getAll().subscribe(employees => this.employees = employees);

        this.deviceService.getAll().subscribe(devices => this.devices = devices);
    }

    onDeviceChange(id)
    {
        this.device = this.devices.find(l => l.id == id);
    }

    search()
    {
        this.devicesNames = [] ;

        this.employee = this.employees.find(e => e.name == this.searchedName);

        for(let deviceId of this.employee.devices)
        {
            var device: Device = this.devices.find(d => d.id == deviceId);

            this.devicesNames.push(device.name);
        }
    }

    assign()
    {
        this.device.employeeId = this.employee.id ;

        this.deviceService.update(this.device).subscribe();
    }
}
