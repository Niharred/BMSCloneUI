import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

    signupUsers: any[] =[];
    signupObj:any ={

    };

    loginObj: any ={
      email: '',
      password:''
    }
 constructor(private router: Router)
 {

 }
  ngOnInit(): void {
      localStorage.setItem("Test","Test");
  }

  onLogin(){

    const isUserExist = true;

    if(isUserExist)
    this.router.navigate(['/Profile'])

  }


}
