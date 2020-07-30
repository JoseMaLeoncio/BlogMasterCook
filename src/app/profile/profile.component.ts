import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../services/authservice.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

 
  lstRecets:any[]
  constructor(public auth:AuthserviceService) {
    this.lstRecets=[]
  }

  ngOnInit(): void {

    this.lstRecets=JSON.parse(localStorage.getItem('lstRecetas'))
    console.log(this.lstRecets);
    
  }

}
