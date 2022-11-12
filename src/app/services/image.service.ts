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

}
