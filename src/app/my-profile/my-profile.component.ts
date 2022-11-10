import { Component, OnInit } from '@angular/core';
import { CuponService } from '../services/cupon.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {

  myCupons! : any ;
  currentUser! : any;

  userPhoto = {
    
  }
  constructor(private cuponService : CuponService, private loginService : LoginService) { }

  ngOnInit() {
    this.myCupons = this.cuponService.myCupons;
    this.currentUser = this.loginService.currentUser;
    if (this.currentUser.firstName === 'Jovan'){
      this.userPhoto = "https://avatars.githubusercontent.com/u/100790659?s=400&u=34cda8e582a149059b4892f3c0754cfd7ad62eaf&v=4"
    }
    this.userPhoto = "https://avatars.githubusercontent.com/u/75267676?v=4"
  }

}
