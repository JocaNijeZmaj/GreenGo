import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CuponService {

  getCuponSubject = new Subject<any>();
  points = 50;
  myCupons : any[] = [];

  constructor(private http : HttpClient) { }

  buyCupon(spentPoints : number){
    this.points = this.points - spentPoints;
    return this.points
  }
}
