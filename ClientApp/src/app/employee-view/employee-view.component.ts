import { DeviceService} from '../services/device.service';
import { EmployeeService } from './../services/employee.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.css']
})

export class EmployeeViewComponent implements OnInit
{
    employee: any;
    laptop: any;

    constructor(private employeeService: EmployeeService, private laptopService: DeviceService, private route: ActivatedRoute) 
    { 

    }

    ngOnInit()
    {
        var employeeId: number ;

        this.route.queryParams.subscribe(params => {
           employeeId = params.id ;

           this.employeeService.get(employeeId).subscribe(employee => {
             this.employee = employee;
     
             this.laptopService.get(this.employee.id).subscribe(laptop => this.laptop = laptop);
           });
        });
    }
}
