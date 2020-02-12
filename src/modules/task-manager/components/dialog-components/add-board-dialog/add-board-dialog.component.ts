import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subject} from 'rxjs';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-add-board-dialog',
  templateUrl: './add-board-dialog.component.html',
  styleUrls: ['./add-board-dialog.component.scss']
})
export class AddBoardDialogComponent implements OnInit {
  boardName: string;
  inputForm: FormGroup;
  inputFormError: any;
  unsubscribe$ = new Subject();
  isValidForm: boolean;

  constructor(private formBuilder: FormBuilder,
              public dialogRef: MatDialogRef<AddBoardDialogComponent>) {
    this.inputForm = this.formBuilder.group({
      value: ['', Validators.required]
    });
    this.inputFormError = {
      value: {}
    };
  }

  ngOnInit() {
    this.inputForm.valueChanges.subscribe(() => {
      this.onFormValuesChanged();
    });
  }

  okClicked() {
    this.dialogRef.close({event: 'ok', data: this.inputForm.value});
  }

  private onFormValuesChanged() {
    for ( const field in this.inputFormError ) {
      if ( !this.inputFormError.hasOwnProperty(field) ) {
        continue;
      }

      // Clear previous errors
      this.inputFormError[field] = {};

      // Get the control
      const control = this.inputForm.get(field);

      if ( control && control.dirty && !control.valid ) {
        this.inputFormError[field] = control.errors;
      }

    }
  }
}
