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
import {CardActionDialogComponent} from './components/dialog-components/card-action-dialog/card-action-dialog.component';
import {CardActionDirective} from './components/directives/card-action.directive';
import { MoveCardComponent } from './components/card-action-components/move-card/move-card.component';
import { CopyCardComponent } from './components/card-action-components/copy-card/copy-card.component';
import { AddChecklistComponent } from './components/card-action-components/add-checklist/add-checklist.component';
import {TaskManagerComponentRegistry} from './task-manager-component-registry';



@NgModule({
  declarations: [
    TaskManagerContentComponent,
    BoardComponent,
    CardComponent,
    ListComponent,
    AddBoardDialogComponent,
    CardDetailsDialogComponent,
    CardDetailMenuComponent,
    CardActionDialogComponent,
    CardActionDirective,
    MoveCardComponent,
    CopyCardComponent,
    AddChecklistComponent
  ],
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
    CardDetailsDialogComponent,
    CardActionDialogComponent,
    MoveCardComponent,
    CopyCardComponent,
    AddChecklistComponent
  ]
})
export class TaskManagerModule {
  constructor() {
    TaskManagerComponentRegistry.init();
  }

}
