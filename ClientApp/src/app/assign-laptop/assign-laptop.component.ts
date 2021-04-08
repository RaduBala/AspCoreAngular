import { LaptopService } from '../services/device.service';
import { Employee } from './../models/employee';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Laptop } from '../models/laptop';

@Component({
  selector: 'app-assign-laptop',
  templateUrl: './assign-laptop.component.html',
  styleUrls: ['./assign-laptop.component.css']
})

export class AssignLaptopComponent implements OnInit
{
    laptops: Laptop[] ;

    employees: Employee[];

    employee: Employee =
    {
      id: null,
      name: "",
      laptopId: null
    };

    laptop: Laptop =
    {
        id: null,
        name: "",
        employeeId: null,
    }

    searchedName: string ;

    constructor(private employeeService: EmployeeService, private laptopService: LaptopService) 
    { 
      
    }

    ngOnInit() 
    {
        this.employeeService.getAll().subscribe(employees => this.employees = employees);

        this.laptopService.getAll().subscribe(laptops => this.laptops = laptops);
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

        this.laptopService.update(this.laptop).subscribe();
    }
}
