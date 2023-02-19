import { Component, Input, Output, EventEmitter } from "@angular/core";
// import { Dialog, DialogRef } from "@angular/cdk/dialog";
// import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: "app-modal-details",
  templateUrl: "./modal-details.component.html",
  styleUrls: ["./modal-details.component.css"]
})

@Input() detailsData;
@Output() onClose: EventEmitter<void> = new EventEmitter<void>();

export class ModalDetailsComponent {
  // constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  close() {
    this.onClose.emit()
  }
}
