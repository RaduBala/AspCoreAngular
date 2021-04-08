import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
/*****/
export class DeviceService
{
    constructor(private http: HttpClient) 
    { 

    }
    
    public getAll()
    {
        return this.http.get<any[]>('device/api/all');
    }

    public get(deviceId)
    {
        var url: string = 'device/api/single/' + deviceId;

        return this.http.get(url);
    }

    public create(device)
    {
        return this.http.post('device/api/create',device);
    }

    public delete(deviceId)
    {
        var url: string = 'device/api/delete/' + deviceId;

        return this.http.delete(url);
    }

    public update(device)
    {
        return this.http.put('device/api/update',device);
    }
}
