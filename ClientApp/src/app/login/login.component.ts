import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { TokenService } from '../services/token.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit
{
    token: any;

    user: User =
    {
      id: 0,
      name: "",
      password: ""
    };

    constructor(private userService: UserService)
    {

    }

    ngOnInit()
    {
        
    }

    login()
    {
        this.userService.login(this.user).subscribe(result =>
        {
            this.token = result;
            console.log(this.token.value);
            localStorage.setItem('token', this.token.value);
        });
    }
}
