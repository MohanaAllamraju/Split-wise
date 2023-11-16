import { Component, EventEmitter, Output } from '@angular/core';
import { NgModel } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';
import { NameDataService } from '../name-data.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-name-input-dialog',
  templateUrl: './name-input-dialog.component.html',
  styleUrls: ['./name-input-dialog.component.css']
})
export class NameInputDialogComponent {

  userName: string = '';

  constructor(
    private modalService: BsModalService,
    private bsModalRef: BsModalRef,
    private router: Router,
    private nameDataService: NameDataService
  ) { }


  saveName() {

    this.nameDataService.changeUserName(this.userName);

    this.bsModalRef.hide();

    //this.router.navigate(['./AppComponent'])
    //this.bsModalRef = this.modalService.show(AppComponent);
  }
}
