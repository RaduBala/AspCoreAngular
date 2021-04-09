import { DeviceService } from '../services/device.service';
import { Device } from '../models/device';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-device-new',
  templateUrl: './device-new.component.html',
  styleUrls: ['./device-new.component.css']
})

export class DeviceNewComponent implements OnInit
{
    device: Device =
    {
        id: 0,
        name: "",
        employeeId: null,
    } ;

    constructor(private deviceService: DeviceService, private router: Router)
    { 
      
    }

    ngOnInit()
    {

    }

    submit()
    {
        this.deviceService.create(this.device).subscribe(device => {
            this.router.navigate(['device/all']);
        });
    }
}
