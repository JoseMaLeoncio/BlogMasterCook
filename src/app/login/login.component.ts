import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../services/authservice.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public auth:AuthserviceService) {

  }
  errorMessage:string;

  ngOnInit(): void {
    //this.errorMessage=this.auth.errormessage;
  }

  ingresar($event){
    console.log($event.value);
    this.errorMessage=this.auth.login($event.value.email,$event.value.password);
    
  }

}
