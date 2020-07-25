import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  @Input() deviceXs: boolean;
  topVal = 0;
  recetas = [
    {
      "Nombre": "Pozole",
      "Autor": "El esponja",
      "imagen": "../assets/pozole.jpg",
      "Descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus justo purus, porta sit amet lectus non, auctor dictum nisi. Maecenas sit amet imperdiet lacus. Nam maximus libero id elit condimentum porttitor. Praesent pretium scelerisque quam sodales ultrices."
    },
    {
      "Nombre": "Pozole",
      "Autor": "El esponja",
      "imagen": "../assets/pozole.jpg",
      "Descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus justo purus, porta sit amet lectus non, auctor dictum nisi. Maecenas sit amet imperdiet lacus. Nam maximus libero id elit condimentum porttitor. Praesent pretium scelerisque quam sodales ultrices."
    },
    {
      "Nombre": "Pozole",
      "Autor": "El esponja",
      "imagen": "../assets/pozole.jpg",
      "Descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus justo purus, porta sit amet lectus non, auctor dictum nisi. Maecenas sit amet imperdiet lacus. Nam maximus libero id elit condimentum porttitor. Praesent pretium scelerisque quam sodales ultrices."
    },
    {
      "Nombre": "Pozole",
      "Autor": "El esponja",
      "imagen": "../assets/pozole.jpg",
      "Descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus justo purus, porta sit amet lectus non, auctor dictum nisi. Maecenas sit amet imperdiet lacus. Nam maximus libero id elit condimentum porttitor. Praesent pretium scelerisque quam sodales ultrices."
    },
    {
      "Nombre": "Pozole",
      "Autor": "El esponja",
      "imagen": "../assets/pozole.jpg",
      "Descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus justo purus, porta sit amet lectus non, auctor dictum nisi. Maecenas sit amet imperdiet lacus. Nam maximus libero id elit condimentum porttitor. Praesent pretium scelerisque quam sodales ultrices."
    },
    {
      "Nombre": "Pozole",
      "Autor": "El esponja",
      "imagen": "../assets/pozole.jpg",
      "Descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus justo purus, porta sit amet lectus non, auctor dictum nisi. Maecenas sit amet imperdiet lacus. Nam maximus libero id elit condimentum porttitor. Praesent pretium scelerisque quam sodales ultrices."
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
}
