import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { WebcamImage } from 'ngx-webcam';
import { ImageService } from '../services/image.service';
import { FormControl } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { slideInAnimation } from './route-animations';
import { CuponService } from '../services/cupon.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  animations: [slideInAnimation]
})
export class NavComponent implements OnInit {

  userPhoto!:string
  user = this.loginService.currentUser;
  coinAmount = 0;
  description! : string;
  openCamera = false;
  public webcamImage!: WebcamImage;
  isWebCamOpen = false ;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
     private router : Router,
     private imageSer: ImageService,
     private loginService: LoginService,
     private cuponService : CuponService
     ) {}
  ngOnInit(): void {
 
  
  this.coinAmount = this.user?.points;
    this.cuponService.getCuponSubject.subscribe(res =>{
      console.log('bouth');
      this.coinAmount = this.loginService.currentUser?.points;
    })

    this.loginService.validatedAll.subscribe(res =>{
      this.loginService.currentUser.points++;
      this.coinAmount = this.loginService.currentUser.points;
      localStorage.setItem('userData', JSON.stringify(this.loginService.currentUser));

    })
  }

  AddPhoto(){
    this.openCamera = !this.openCamera;
  }

  navigateTo(route: string){
    this.router.navigate([route]);
  }


  handleImage(webcamImage: WebcamImage) {
    this.webcamImage = webcamImage;
    this.isWebCamOpen = true;
  }
  uploadImg(){
    const sendImg = {
      imageBase64: this.webcamImage.imageAsBase64,
      user_id: this.loginService.currentUser.id,
      description: this.description
    }
    console.log(this.webcamImage);
    this.imageSer.addImg(sendImg).subscribe((res : any)=>{
      console.log(res);
    });
    this.isWebCamOpen = false ;
  }

}
