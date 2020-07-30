import { Component, Input, OnInit } from '@angular/core';
import { recetas } from '../model/recetas';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  @Input() deviceXs: boolean;
  rec : any[];
  constructor(){

  }
  topVal = 0;
  

  ngOnInit(): void {
    //location.reload();
    if(JSON.parse(localStorage.getItem('user'))){
      this.rec = JSON.parse(localStorage.getItem('Recetas'));
      console.log(this.rec);
    }else{
      this.rec = recetas;
    }
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
