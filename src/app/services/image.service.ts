import { Injectable } from '@angular/core';
import { WebcamImage } from 'ngx-webcam';
import { catchError, Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor( private http : HttpClient) { }



  addImg(img: any): Observable<any> {

    return this.http.post<any>("https://192.168.191.251:5051/api/upload/v2", img);

  }
  getAQI(){
    let lat = '43.3000';
    let lon = '21.9000';
    let key = '5c7da3f2-6d0f-4529-9dfe-73cefddc0b1b';

    return this.http.get<any>('https://api.waqi.info/feed/london/?token=demo');
  }
}
