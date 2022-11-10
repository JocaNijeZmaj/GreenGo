import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { ValidationService } from '../services/validation.service';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.scss']
})
export class ValidationComponent implements OnInit {
  doneCheck = false;

  validations : any;

  constructor(private validationService: ValidationService, private loginService: LoginService) { }

  ngOnInit(): void {
    this.validationService.getValidations().subscribe(res=>{
      console.log(res);
      this.validations = res;
    })
  }

  validate(isApproved : boolean, validation : any){
    const validateObject = {
      imgId: validation.imgId,
      voterId : this.loginService.currentUser.id,
      approved : isApproved
    }
    this.validationService.validate(validateObject).subscribe(
    {
     next : (res)=>{
      this.validations = this.validations.filter((v : any)=> v.imgId !== validation.imgId);
    },
     error : (e)=>{
      console.log(e);
      this.validations = this.validations.filter((v : any)=> v.imgId !== validation.imgId);

      if(this.validations.length === 0){
        this.loginService.validatedAll.next(true);
        this.loginService.buyCupon(this.loginService.currentUser.id, -1);
      }
     }
    }
    )

  }

}
