import { Component, OnInit, Input } from '@angular/core';
import { AuthserviceService } from '../services/authservice.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() deviceXs: boolean;
  topVal = 0;
  constructor(public auth:AuthserviceService) {
    
  }
  errorMessage:string;

  ngOnInit(): void {
    
  }

  ingresar($event){
    console.log($event.value);
    this.errorMessage=this.auth.login($event.value.email,$event.value.password);
    
  }

  onScroll(e) {
    let scrollXs = this.deviceXs ? 55 : 73;
    if (e.srcElement.scrollTop < scrollXs) {
      this.topVal = e.srcElement.scrollTop;
    } else {
      this.topVal = scrollXs;
    }
  }
  sideBarScroll() {
    let e = this.deviceXs ? 160 : 130;
    return e - this.topVal;
  }

}
