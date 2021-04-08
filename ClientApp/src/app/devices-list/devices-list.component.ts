
import { DeviceService } from '../services/device.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-laptops-list',
  templateUrl: './laptops-list.component.html',
  styleUrls: ['./laptops-list.component.css']
})

export class DevicesListComponent implements OnInit 
{
    laptops: any[] ;

    constructor(private deviceService: DeviceService) 
    { 

    }

    ngOnInit() 
    {
        this.deviceService.getAll().subscribe(laptops => this.laptops = laptops);
    }

    onDelete(laptop)
    {
        console.log(laptop);

        this.deviceService.delete(laptop.id).subscribe();
    }
}
