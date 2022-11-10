import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CuponService {

  getCuponSubject = new Subject<any>();
  myCupons : any[] = [];

  constructor(private http : HttpClient) { }

  buyCupon(userId : number, spentPoints : number){

    const payload = { userId : userId, spentPoints : spentPoints};
    return this.http.post("https://192.168.191.251:5051/api/buy",payload);
  }
}
