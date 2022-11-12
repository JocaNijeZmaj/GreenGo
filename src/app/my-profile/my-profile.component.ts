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

}
}