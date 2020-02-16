import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {FormControl, Validators} from '@angular/forms';
import {addBoard, addCard} from '../../graphql/task-manager.mutation';
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
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  getConnectedList(): any[] {
    return this.listIds;
  }

  addCard() {
    this.apollo.mutate({
      mutation: addCard,
      variables: {
        columnId: this.listDetail.id,
        ticket: {
          title: this.cardName.value
        }
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
