import {Component, Input, OnInit} from '@angular/core';
import {AddBoardDialogComponent} from '../dialog-components/add-board-dialog/add-board-dialog.component';
import {MatDialog} from '@angular/material';
import {CardDetailsDialogComponent} from '../dialog-components/card-details-dialog/card-details-dialog.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() taskDetail: any;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openCard() {
    const dialogRef = this.dialog.open(CardDetailsDialogComponent, {
      minWidth: '300px',
      minHeight: '300px',
      data: this.taskDetail
    });

    dialogRef.afterClosed().subscribe();
  }
}
