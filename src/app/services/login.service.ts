import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, tap } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  currentUser! : any;
  validatedAll = new Subject<any>();

  constructor(private http : HttpClient,private router : Router,
    private fireauth : AngularFireAuth) { }

  login(email : string, password : string){
    this.fireauth.signInWithEmailAndPassword(email, password).then( () => {
      localStorage.setItem('token', 'true');
      this.router.navigate(['/home']);
    }, err => {
      console.log(err)
    })
  }

  register(email: string, password: string){
    this.fireauth.createUserWithEmailAndPassword(email,password).then( ()=> {
      this.router.navigate(['/login'])
    }, err => { alert(err.message);
      this.router.navigate(['/register'])
    })
  }
  logout(){
    this.fireauth.signOut().then( ()=> {
      localStorage.removeItem('token');
      this.router.navigate(['/login'])
    },err=>{
      alert(err.message)
    })
  }
  buyCupon(userId : number, spentPoints : number){

    const payload = { userId : userId, spentPoints : spentPoints};
    return this.http.post("https://192.168.191.251:5051/api/buy",payload);
  }
}
