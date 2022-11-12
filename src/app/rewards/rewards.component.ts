import { Component, OnInit } from '@angular/core';
import { CuponService } from '../services/cupon.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.component.html',
  styleUrls: ['./rewards.component.scss']
})
export class RewardsComponent implements OnInit {

  constructor(private cuponService : CuponService, private loginService : LoginService) { }

  cupons = [
    {
      title: 'Mcdonalds',
      valid: '30.2.2023',
      procent: '10%',
      logo: "https://i.pinimg.com/originals/c7/84/67/c78467db9ff497393cb548a48f02d451.png",
      price: 4
    },
    {
      title: 'KFC',
      valid: '13.4.2024',
      procent: '15%',
      logo: "https://pngimg.com/uploads/kfc/kfc_PNG54.png",
      price : 3
    },
    {
      title: 'IKEA',
      valid: '12.5.2023',
      procent: '5%',
      logo: "https://www.edigitalagency.com.au/wp-content/uploads/ikea-logo-png.png",
      price : 2
    },
    {
      title: 'DM',
      valid: '1.2.2024',
      procent: '20%',
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Dm_Logo.svg/2560px-Dm_Logo.svg.png",
      price: 1
    },
    {
      title: 'IKEA',
      valid: '12.5.2023',
      procent: '15%',
      logo: "https://www.edigitalagency.com.au/wp-content/uploads/ikea-logo-png.png",
      price : 3
    }
  ]

  ngOnInit(): void {

  }

  buyCupon(cupon : any){
    this.cuponService.myCupons.push(cupon);
    console.log(this.cuponService.points)
    
    this.cuponService.buyCupon(cupon.price)
  }

}
