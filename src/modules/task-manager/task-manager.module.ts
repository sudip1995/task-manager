import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskManagerContentComponent } from './components/task-manager-content/task-manager-content.component';
import { BoardComponent } from './components/board/board.component';
import { CardComponent } from './components/card/card.component';
import { ListComponent } from './components/list/list.component';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatProgressBarModule
} from '@angular/material';
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
import { CardDetailsContentComponent } from './components/card-details-content/card-details-content.component';
import { ChecklistDetailsComponent } from './components/card-details-components/checklist-details/checklist-details.component';
import { HomeComponent } from './components/home/home.component';
import { AddAttachmentComponent } from './components/card-action-components/add-attachment/add-attachment.component';
import {DndDirective} from './directives/dnd.directive';
import { AttachmentDetailsComponent } from './components/card-details-components/attachment-details/attachment-details.component';



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
    AddChecklistComponent,
    CardDetailsContentComponent,
    ChecklistDetailsComponent,
    HomeComponent,
    AddAttachmentComponent,
    DndDirective,
    AttachmentDetailsComponent
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
    ClickOutsideModule,
    MatProgressBarModule,
    MatCheckboxModule
  ],
  entryComponents: [
    AddBoardDialogComponent,
    CardDetailsDialogComponent,
    CardActionDialogComponent,
    MoveCardComponent,
    CopyCardComponent,
    AddChecklistComponent,
    AddAttachmentComponent
  ]
})
export class TaskManagerModule {
  constructor() {
    TaskManagerComponentRegistry.init();
  }

}
