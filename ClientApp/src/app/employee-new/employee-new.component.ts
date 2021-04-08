import { Laptop } from './../models/laptop';
import { Employee } from './../models/employee';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Router } from '@angular/router';
import { LaptopService } from '../services/laptop.service';

@Component({
  selector: 'app-employee-new',
  templateUrl: './employee-new.component.html',
  styleUrls: ['./employee-new.component.css']
})

export class EmployeeNewComponent implements OnInit 
{
    employee: Employee =
    {
        id: 0,
        name: "",
        laptopId: null
    } ;

    constructor(private employeeService: EmployeeService, private router: Router)
    {

    }

    ngOnInit() 
    {

    }

    submit()
    {
        this.employeeService.create(this.employee).subscribe(employee =>{
            this.router.navigate(['laptop/all']);
        });
    }
}
