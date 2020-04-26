import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Apollo} from 'apollo-angular';
import {FormControl, Validators} from '@angular/forms';
import {addChecklist, addChecklistItem} from '../../../graphql/task-manager.mutation';

@Component({
  selector: 'app-checklist-details',
  templateUrl: './checklist-details.component.html',
  styleUrls: ['./checklist-details.component.scss']
})
export class ChecklistDetailsComponent implements OnInit {

  @Input() checklist: any;
  itemInputBoxOpen: boolean;

  @ViewChild('itemInput', null) itemInput: ElementRef;
  itemTitle: FormControl;

  constructor(private apollo: Apollo) {
    this.itemTitle = new FormControl('', Validators.required);
  }

  ngOnInit() {
  }

  addChecklistItem() {
    this.apollo.mutate({
      mutation: addChecklistItem,
      variables: {
        checklistId: this.checklist.id,
        title: this.itemTitle.value
      },
      optimisticResponse: {
        __typename: 'Mutation',
        addChecklistItem: {
          __typename: 'Checklist',
          id: '1',
          title: this.itemTitle.value
        }
      }
    }).subscribe(res => {
      this.checklist.checkListItems.push(res.data.addChecklistItem);
      this.itemTitle.setValue('');
      this.openItemInput();
    });
  }

  openItemInput() {
    this.itemInputBoxOpen = true;
    setTimeout(() => {
      this.itemInput.nativeElement.focus();
      this.itemInput.nativeElement.click();
    }, 0);
  }

  closeItemInput() {
    this.itemInputBoxOpen = false;
  }
}
