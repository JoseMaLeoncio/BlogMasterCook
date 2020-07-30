import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../services/authservice.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user :any;
  lstRecets:any[]
  constructor(public auth:AuthserviceService) {
    this.lstRecets=[]
  }

  ngOnInit(): void {

    this.lstRecets=JSON.parse(localStorage.getItem('lstRecetas'))
    console.log(this.lstRecets);
    this.user=JSON.parse(localStorage.getItem('user'))
    console.log(this.user);
  }

}
