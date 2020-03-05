import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {FormControl, Validators} from '@angular/forms';
import {addBoard, addCard, moveColumn, moveTicket} from '../../graphql/task-manager.mutation';
import {Apollo} from 'apollo-angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() listDetail: any;
  @Input() listIds: string[];
  cardName: FormControl;
  cardInputBoxOpen: boolean;

  @ViewChild('cardInput', null) cardInput: ElementRef;

  constructor(private apollo: Apollo) {
    this.cardName = new FormControl('', Validators.required);
  }

  ngOnInit() {
  }

  drop(event: CdkDragDrop<any[]>) {
    let prevColumnId = this.listDetail.id;
    let nowColumnId = null;
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      prevColumnId = event.previousContainer.data[0].columnId;
      nowColumnId = this.listDetail.id;
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
    this.apollo.mutate({
      mutation: moveTicket,
      variables: {
        fromBoardId: this.listDetail.boardId,
        toBoardId: null,
        fromColumnId: prevColumnId,
        toColumnId: nowColumnId,
        previousIndex: event.previousIndex,
        currentIndex: event.currentIndex
      }
    }).subscribe();
  }

  getConnectedList(): any[] {
    return this.listIds;
  }

  addCard() {
    this.apollo.mutate({
      mutation: addCard,
      variables: {
        columnId: this.listDetail.id,
        title: this.cardName.value
      },
      optimisticResponse: {
        __typename: 'Mutation',
        addTicket: {
          __typename: 'Ticket',
          id: '1',
          title: this.cardName.value
        }
      }
    }).subscribe(res => {
      if (this.listDetail.tickets == null) {
        this.listDetail.tickets = [];
      }
      this.listDetail.tickets.push(res.data.addTicket);
    });
    this.cardName.setValue('');
  }

  closeCardInput() {
    this.cardInputBoxOpen = false;
  }

  openCardInput() {
    this.cardInputBoxOpen = true;
    setTimeout(() => {
      this.cardInput.nativeElement.focus();
      this.cardInput.nativeElement.click();
    }, 0);
  }
}
