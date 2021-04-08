
import { DeviceService } from '../services/device.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-laptops-list',
  templateUrl: './laptops-list.component.html',
  styleUrls: ['./laptops-list.component.css']
})/************************** */

export class LaptopsListComponent implements OnInit 
{
    laptops: any[] ;

    constructor(private laptopService: DeviceService) 
    { 

    }

    ngOnInit() 
    {
        this.laptopService.getAll().subscribe(laptops => this.laptops = laptops);
    }

    onDelete(laptop)
    {
        console.log(laptop);

        this.laptopService.delete(laptop.id).subscribe();
    }
}
