import {Component, Input, OnInit} from '@angular/core';
import {AddBoardDialogComponent} from '../dialog-components/add-board-dialog/add-board-dialog.component';
import {MatDialog} from '@angular/material';
import {CardActionDialogComponent} from '../dialog-components/card-action-dialog/card-action-dialog.component';
import {TaskManagerComponentRegistry} from '../../task-manager-component-registry';

@Component({
  selector: 'app-card-detail-menu',
  templateUrl: './card-detail-menu.component.html',
  styleUrls: ['./card-detail-menu.component.scss']
})
export class CardDetailMenuComponent implements OnInit {

  @Input() cardDetails: any;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openCardDetailsDialog(componentName: string, header: string, actionButtonText: string) {
    const dialogRef = this.dialog.open(CardActionDialogComponent, {
      minWidth: '350px',
      maxWidth: '1000px',
      data: {
        header,
        component: TaskManagerComponentRegistry.components.get(componentName),
        actionButtonText,
        cardDetails: this.cardDetails
      }
    });
  }
}
