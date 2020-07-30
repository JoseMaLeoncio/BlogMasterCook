import { Component, ViewEncapsulation , Input} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { AuthserviceService } from '../services/authservice.service';
import { Router } from "@angular/router";
import { recetas } from '../model/recetas';
@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css']
})
export class RecetasComponent{
  RecetaModal: any[]=[];
  rec:any[];
 @Input() deviceXs: boolean;
  topVal = 0;
  constructor(private modalService: NgbModal, public aut:AuthserviceService, public _route:Router) {}
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
  openXl(content, values) {
    if(this.aut.isAutorized()){
    this.RecetaModal.push(values);
    console.log(values);
    this.modalService.open(content, { size: 'xl', backdrop: 'static', keyboard: false });
    }
    else{
      this._route.navigate(['login']);
    }
  }

  SaveRecet(content, values){
    console.log(values);
    this.aut.lstRecetas.push(values);
    if(localStorage.getItem('lstRecetas')){
      let memory=[]
      memory=JSON.parse(localStorage.getItem('lstRecetas'));
      if(memory.length>this.aut.lstRecetas.length){
        memory.push(this.aut.lstRecetas[0])
        localStorage.removeItem('lstRecetas');
        localStorage.setItem('lstRecetas',JSON.stringify(memory));
      }else{
        localStorage.removeItem('lstRecetas');
        localStorage.setItem('lstRecetas',JSON.stringify(this.aut.lstRecetas));
      }
      
    }else{
      localStorage.setItem('lstRecetas',JSON.stringify(this.aut.lstRecetas));
    }
    console.log(this.aut.lstRecetas);
  }

  reset(){
    this.RecetaModal=[];
  }

  like(value){
    console.log(value);
    for (let index = 0; index < this.rec.length; index++) {
      let receta = index;
      if(receta == value){
        console.log(recetas[value]);
        this.rec[value].Likes = this.rec[value].Likes += 1  ;
        localStorage.setItem('Recetas',JSON.stringify(this.rec));
      }
    }
  }

  dislike(value){
    console.log(value);
    for (let index = 0; index < recetas.length; index++) {
      let receta = index;
      if(receta == value){
        console.log(recetas[value]);
        this.rec[value].Dislikes = this.rec[value].Dislikes += 1  ;
        localStorage.setItem('Recetas',JSON.stringify(this.rec));
      }
    }
    
  }

}
