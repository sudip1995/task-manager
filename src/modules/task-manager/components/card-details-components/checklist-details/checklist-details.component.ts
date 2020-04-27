import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Apollo} from 'apollo-angular';
import {FormControl, Validators} from '@angular/forms';
import {addChecklistItem, updateChecklistItem} from '../../../graphql/task-manager.mutation';


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
  percentage = 0;

  constructor(private apollo: Apollo) {
    this.itemTitle = new FormControl('', Validators.required);
  }

  ngOnInit() {
    this.calculatePercentage();
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
          __typename: 'ChecklistItem',
          id: '1',
          title: this.itemTitle.value,
          isChecked: false
        }
      }
    }).subscribe(res => {
      if (this.checklist.checkListItems == null) {
        this.checklist.checkListItems = [];
      }
      this.checklist.checkListItems.push(res.data.addChecklistItem);
      this.calculatePercentage();
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

  private calculatePercentage() {
    const checkedItemCount = this.checklist.checkListItems.filter(o => o.isChecked).length;

    if (this.checklist.checkListItems && this.checklist.checkListItems.length) {
      this.percentage = (checkedItemCount / this.checklist.checkListItems.length) * 100;
      this.percentage = Math.round(this.percentage);
    }
  }

  toggleCheckItem(checklistItem: any) {
    this.apollo.mutate({
      mutation: updateChecklistItem,
      variables: {
        id: checklistItem.id,
        checklistItem: {
          isChecked: !checklistItem.isChecked
        }
      },
      optimisticResponse: {
        __typename: 'Mutation',
        updateChecklistItem: {
          __typename: 'ChecklistItem',
          id: '1',
          title: checklistItem.title,
          isChecked: !checklistItem.isChecked
        }
      }
    }).subscribe(res => {
      checklistItem.isChecked = res.data.updateChecklistItem.isChecked;
      this.calculatePercentage();
    });
  }
}
