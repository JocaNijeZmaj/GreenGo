import { Component, OnInit } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'InsomniaCliant';

  constructor(private loginService : LoginService) {
  }

  ngOnInit(): void {
    const userData = JSON.parse(localStorage.getItem('userData') as string);
    this.loginService.currentUser = userData;

  }

}
