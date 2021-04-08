import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService
{
    constructor(private http: HttpClient) 
    {

    }

    public getAll()
    {
        return this.http.get<any[]>('employee/api/all');
    }

    public get(employeeId)
    {
        var url: string = 'employee/api/single/' + employeeId;

        return this.http.get(url);
    }

    public create(employee)
    {
        return this.http.post('employee/api/create',employee);
    }

    public update(employee)
    {
        return this.http.put('employee/api/update',employee);
    }

    public delete(employeeId)
    {
        var url: string = 'employee/api/delete/' + employeeId;

        return this.http.delete(url);
    }
}
