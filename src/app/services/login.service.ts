import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  currentUser! : any;
  validatedAll = new Subject<any>();

  constructor(private http : HttpClient,private router : Router) { }

  login(userName : string){
    return this.http.post("https://192.168.191.251:5051/api/login",userName).pipe(tap(response =>{
      this.router.navigate(['home']);
    }))
  }
  buyCupon(userId : number, spentPoints : number){

    const payload = { userId : userId, spentPoints : spentPoints};
    return this.http.post("https://192.168.191.251:5051/api/buy",payload);
  }
}
