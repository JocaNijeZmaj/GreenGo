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


    this.loginService.login(email).subscribe({
      next : (response)=>{
        console.log(response);
        this.loginService.currentUser = response;
        localStorage.setItem('userData', JSON.stringify(this.loginService.currentUser));
      },
      error :(e)=>{
        console.log(e);
        this.router.navigate(['home']);
      }
    })
  }


}
