import { Router } from '@angular/router';
import { EmployeeService } from './../services/employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})

export class EmployeesListComponent implements OnInit 
{
    employees: any[] ;

    constructor(private employeeService: EmployeeService, private router: Router) 
    {
        
    } 

    ngOnInit() 
    {
        this.employeeService.getAll().subscribe(employees => this.employees = employees);
    }

    onDelete(employee)
    {
        this.employeeService.delete(employee.id).subscribe();
    }

    onView(employee)
    {
        this.router.navigate(['/employee/view/'], {
            queryParams: {
                id: employee.id
            }
        });
    }
}
