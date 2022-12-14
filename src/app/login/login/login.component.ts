import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private loginService : LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form : NgForm){
    const email = form.controls["username"].value ;
    const password = form.controls["password"].value ;

    this.loginService.login(email, password)
  }
  loginTest(){
    this.loginService.login('test@gmail.com', '123456')
  }

}
