import {Component, OnDestroy, OnInit} from '@angular/core';
import {CardActionInterface} from '../../../interfaces/card-action.interface';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable, Subject} from 'rxjs';
import {addCard, addChecklist} from '../../../graphql/task-manager.mutation';
import {Apollo} from 'apollo-angular';


@Component({
  selector: 'app-add-checklist',
  templateUrl: './add-checklist.component.html',
  styleUrls: ['./add-checklist.component.scss']
})
export class AddChecklistComponent implements OnInit, OnDestroy, CardActionInterface {
  cardDetails: any;
  inputForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private apollo: Apollo) {
    this.inputForm = this.formBuilder.group({
      title: ['Checklist', Validators.required]
    });
  }

  ngOnInit() {
  }

  onClick(): boolean {
    if (this.inputForm.controls.title.value) {
      this.addChecklist(this.inputForm.controls.title.value);
      return true;
    }
  }

  addChecklist(title: string) {
    this.apollo.mutate({
      mutation: addChecklist,
      variables: {
        ticketId: this.cardDetails.id,
        title
      },
      optimisticResponse: {
        __typename: 'Mutation',
        addChecklist: {
          __typename: 'Checklist',
          id: '1',
          title
        }
      }
    }).subscribe(res => {
      this.cardDetails.checkLists.push(res.data.addChecklist);
    });
  }

  ngOnDestroy(): void {
  }

}
