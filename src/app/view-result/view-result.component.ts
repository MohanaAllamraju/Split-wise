import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-view-result',
  templateUrl: './view-result.component.html',
  styleUrls: ['./view-result.component.css']
})
export class ViewResultComponent {
  result: number = 0;

  constructor(public modalRef: BsModalRef) { }

  closeModal() {
    this.modalRef.hide();
  }


}
