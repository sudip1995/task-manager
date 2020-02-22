import { Component, OnInit } from '@angular/core';
import {AddBoardDialogComponent} from '../dialog-components/add-board-dialog/add-board-dialog.component';
import {MatDialog} from '@angular/material';
import {CardActionDialogComponent} from '../dialog-components/card-action-dialog/card-action-dialog.component';
import {MoveCardComponent} from '../card-action-components/move-card/move-card.component';
import {CopyCardComponent} from '../card-action-components/copy-card/copy-card.component';

@Component({
  selector: 'app-card-detail-menu',
  templateUrl: './card-detail-menu.component.html',
  styleUrls: ['./card-detail-menu.component.scss']
})
export class CardDetailMenuComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openMoveCardDialog() {
    const dialogRef = this.dialog.open(CardActionDialogComponent, {
      minWidth: '350px',
      maxWidth: '1000px',
      data: {
        header: 'Move Card',
        component: MoveCardComponent,
        actionButtonText: 'Move'
      }
    });
  }

  openCopyCardDialog() {
    const dialogRef = this.dialog.open(CardActionDialogComponent, {
      minWidth: '350px',
      maxWidth: '1000px',
      data: {
        header: 'Copy Card',
        component: CopyCardComponent,
        actionButtonText: 'Copy'
      }
    });
  }
}
