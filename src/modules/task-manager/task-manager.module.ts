import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskManagerContentComponent } from './components/task-manager-content/task-manager-content.component';
import { BoardComponent } from './components/board/board.component';
import { CardComponent } from './components/card/card.component';
import { ListComponent } from './components/list/list.component';
import {MatButtonModule, MatCardModule, MatDialogModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {ReactiveFormsModule} from '@angular/forms';
import { AddBoardDialogComponent } from './components/dialog-components/add-board-dialog/add-board-dialog.component';
import {ClickOutsideModule} from 'ng-click-outside';
import { CardDetailsDialogComponent } from './components/dialog-components/card-details-dialog/card-details-dialog.component';
import { CardDetailMenuComponent } from './components/card-detail-menu/card-detail-menu.component';



@NgModule({
  declarations: [TaskManagerContentComponent,
    BoardComponent,
    CardComponent,
    ListComponent,
    AddBoardDialogComponent,
    CardDetailsDialogComponent,
    CardDetailMenuComponent],
  exports: [
    TaskManagerContentComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    FlexLayoutModule,
    DragDropModule,
    ScrollingModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    ClickOutsideModule
  ],
  entryComponents: [
    AddBoardDialogComponent,
    CardDetailsDialogComponent
  ]
})
export class TaskManagerModule { }
