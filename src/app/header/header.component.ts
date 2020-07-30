import { Component, Input, OnInit } from "@angular/core";
import { AuthserviceService } from '../services/authservice.service';
import { Router } from "@angular/router";
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  @Input() deviceXs: boolean;
  constructor(public auth:AuthserviceService,public route:Router){
    
  }

  isLogge=false;

  ngOnInit(): void {
    this.isLogge=this.auth.isAutorized();
    console.log(this.isLogge);
  }

  cerrarSesion(){
    this.auth.logout();
    setTimeout (() => {
      location.reload();
    }, 500);
    this.route.navigate(['content']);
    //location.reload();
  }
  


}
