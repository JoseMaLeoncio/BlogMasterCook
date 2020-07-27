import { Component, ViewEncapsulation , Input} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css']
})
export class RecetasComponent{
  RecetaModal: any[]=[];
 @Input() deviceXs: boolean;
  topVal = 0;
  constructor(private modalService: NgbModal) {}
  recetas = [
    {
      Nombre: "Pozole",
      Autor: "El esponja1",
      imagen: "../assets/pozole.jpg",
      Descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus justo purus, porta sit amet lectus non, auctor dictum nisi. Maecenas sit amet imperdiet lacus. Nam maximus libero id elit condimentum porttitor. Praesent pretium scelerisque quam sodales ultrices.",
      Likes: 1,
      Dislikes:1,
    },
    {
      Nombre: "Pozole",
      Autor: "El esponja2",
      imagen: "../assets/pozole.jpg",
      Descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus justo purus, porta sit amet lectus non, auctor dictum nisi. Maecenas sit amet imperdiet lacus. Nam maximus libero id elit condimentum porttitor. Praesent pretium scelerisque quam sodales ultrices.",
      Likes: "",
      Dislikes:"",
    },
    {
      Nombre: "Pozole",
      Autor: "El esponja3",
      imagen: "../assets/pozole.jpg",
      Descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus justo purus, porta sit amet lectus non, auctor dictum nisi. Maecenas sit amet imperdiet lacus. Nam maximus libero id elit condimentum porttitor. Praesent pretium scelerisque quam sodales ultrices.",
      Likes: "",
      Dislikes:"",
    },
    {
      Nombre: "Pozole",
      Autor: "El esponja4",
      imagen: "../assets/pozole.jpg",
      Descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus justo purus, porta sit amet lectus non, auctor dictum nisi. Maecenas sit amet imperdiet lacus. Nam maximus libero id elit condimentum porttitor. Praesent pretium scelerisque quam sodales ultrices.",
      Likes: "",
      Dislikes:"",
    },
    {
      Nombre: "Pozole",
      Autor: "El esponja5",
      imagen: "../assets/pozole.jpg",
      Descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus justo purus, porta sit amet lectus non, auctor dictum nisi. Maecenas sit amet imperdiet lacus. Nam maximus libero id elit condimentum porttitor. Praesent pretium scelerisque quam sodales ultrices.",
      Likes: "",
      Dislikes:"",
    },
    {
      Nombre: "Pozole",
      Autor: "El esponja6",
      imagen: "../assets/pozole.jpg",
      Descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus justo purus, porta sit amet lectus non, auctor dictum nisi. Maecenas sit amet imperdiet lacus. Nam maximus libero id elit condimentum porttitor. Praesent pretium scelerisque quam sodales ultrices.",
      Likes: "",
      Dislikes:"",
    }
  ]
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
    this.RecetaModal.push(values);
    console.log(values);
    this.modalService.open(content, { size: 'xl' });
    
  }
  reset(){
    this.RecetaModal=[];
  }
}
