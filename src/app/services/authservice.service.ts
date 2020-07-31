import { Injectable } from '@angular/core';
import { users, recets } from '../model/user';
import { Router } from "@angular/router";
import { LoginComponent } from '../login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  user:users=null;
  errormessage:string;
  lstRecetas:any[];
  acceso:any={
    usr:"",
    pwd:""
  }
  constructor(public _route:Router) { 
    this.acceso.usr="ivangc@gmail.com";
    this.acceso.pwd="1234";
    this.lstRecetas=[];
  }

  isAutorized(){
    if(localStorage.getItem('user')){
      return true;
    }else{
      this.user=null;
      return false;
    }
  }


  login(user: string, pass:string){
    if(user==this.acceso.usr&&pass==this.acceso.pwd){
      this.user= new users();
      this.user.usr=user;
      this.user.pass=pass;
      this.user.id=1;
      this.user.recets=[];
      localStorage.setItem('user',JSON.stringify(this.user));
      //
      setTimeout (() => {
        location.reload();
      }, 500);
      this._route.navigate(['content']);
    }else{
      this.errormessage="Usuario y/o contraseña incorrecta"
      this._route.navigate(['login'])
    }
    return this.errormessage;
  }

  logout(){
    this.user=null;
    this.lstRecetas=[];
    localStorage.removeItem("user");
    localStorage.clear();
  }


}
