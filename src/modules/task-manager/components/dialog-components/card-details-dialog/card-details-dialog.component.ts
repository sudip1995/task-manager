import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-card-details-dialog',
  templateUrl: './card-details-dialog.component.html',
  styleUrls: ['./card-details-dialog.component.scss']
})
export class CardDetailsDialogComponent implements OnInit {
  description: FormControl;

  constructor(@Inject(MAT_DIALOG_DATA) public cardDetails: any) {
    this.description = new FormControl();
  }

  ngOnInit() {
    console.log(this.cardDetails);
  }

}
