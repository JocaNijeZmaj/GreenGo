import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from './login.service';

@Injectable()
export class ValidationService {

  constructor(private http : HttpClient, private loginService: LoginService) { }

  getValidations(){
    return this.http.get("https://192.168.191.251:5051/api/vote/"+this.loginService.currentUser.id);
  }

  validate(validateObject : any){
    return this.http.post("https://192.168.191.251:5051/api/validate",validateObject);
  }


}
