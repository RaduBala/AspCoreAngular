import { DeviceService } from '../services/device.service';
import { Employee } from '../models/employee';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Device } from '../models/device';

@Component({
  selector: 'app-assign-laptop',
  templateUrl: './assign-laptop.component.html',
  styleUrls: ['./assign-laptop.component.css']
})

export class AssignDeviceComponent implements OnInit
{
    laptops: Device[] ;

    employees: Employee[];

    employee: Employee =
    {
      id: null,
      name: "",
      deviceId: null
    };

    laptop: Device =
    {
        id: null,
        name: "",
        employeeId: null,
    }

    searchedName: string ;

    constructor(private employeeService: EmployeeService, private deviceService: DeviceService) 
    { 
      
    }

    ngOnInit() 
    {
        this.employeeService.getAll().subscribe(employees => this.employees = employees);

        this.deviceService.getAll().subscribe(laptops => this.laptops = laptops);
    }

    onLaptopChange(id)
    {
        this.laptop = this.laptops.find(l => l.id == id);
    }

    search()
    {
        this.employee = this.employees.find(e => e.name == this.searchedName);

        console.log(this.employee);
    }

    submit()
    {
        this.laptop.employeeId = this.employee.id ;

        this.deviceService.update(this.laptop).subscribe();
    }
}
