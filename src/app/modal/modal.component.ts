import { Component, OnInit, Input } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() deviceXs: boolean;
  topVal = 0;
  constructor(private modal:NgbModal) { }

  ngOnInit(): void {
  }
  
  
}
