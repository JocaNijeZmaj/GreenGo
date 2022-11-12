import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private loginService : LoginService, private router: Router) { }

  ngOnInit(): void {
  }

    onSubmit(form : NgForm){
    const email = form.controls["username"].value ;
    const password = form.controls["password"].value ;

    this.loginService.register(email, password)
    }
}
