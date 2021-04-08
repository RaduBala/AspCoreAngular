import { LaptopService } from '../services/device.service';
import { Laptop } from './../models/laptop';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-laptop-new',
  templateUrl: './laptop-new.component.html',
  styleUrls: ['./laptop-new.component.css']
})

export class LaptopNewComponent implements OnInit
{
    laptop: Laptop =
    {
        id: 0,
        name: "",
        employeeId: null,
    } ;

    constructor(private laptopService: LaptopService, private router: Router)
    { 
      
    }

    ngOnInit()
    {

    }

    submit()
    {
        this.laptopService.create(this.laptop).subscribe(laptop => {
            this.router.navigate(['laptop/all']);
        });
    }
}
