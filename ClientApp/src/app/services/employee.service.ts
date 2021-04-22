import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService
{
    constructor(private http: HttpClient, private userService: UserService) 
    {

    }

    public getAll()
    {
        var header =
        {
            headers: new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`)
        }

        return this.http.get<any[]>('employee/api/all',header);
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
