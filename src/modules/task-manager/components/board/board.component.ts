import {Component, ElementRef, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {FormControl, Validators} from '@angular/forms';
import {Apollo} from 'apollo-angular';
import {ActivatedRoute} from '@angular/router';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';
import {boardById} from '../../graphql/task-manager.query';
import {addList} from '../../graphql/task-manager.mutation';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit, OnDestroy {

  boardDetail: any;
  listIds: string[];
  listName: FormControl;
  unSubscribe$ = new Subject();
  listInputBoxOpen: boolean;

  @ViewChild('listInput', null) listInput: ElementRef;
  constructor(private apollo: Apollo,
              private activatedRoute: ActivatedRoute) {
    this.listName = new FormControl('', Validators.required);
  }

  ngOnInit() {
    this.activatedRoute.params.pipe(takeUntil(this.unSubscribe$)).subscribe(param => {
      if (param && param.id) {
        this.loadBoardDetail(param.id);
      }
    });
  }
  private loadBoardDetail(boardId: any) {
    this.apollo.watchQuery<any>({
      query: boardById,
      variables: {
        boardId
      }
    }).valueChanges.subscribe(res => {
        this.boardDetail = res.data.board;
        this.listIds = this.boardDetail.columns.map(l => `${l.id}`);
      }
    );
  }

  drop(event: CdkDragDrop<string, any>) {
    console.log(event);
    if (event.previousIndex !== event.currentIndex) {

    }
    moveItemInArray(this.boardDetail.columns, event.previousIndex, event.currentIndex);
    this.listIds = this.boardDetail.columns.map(l => `${l.id}`);
  }

  addList() {
    this.apollo.mutate({
      mutation: addList,
      variables: {
        boardId: this.boardDetail.id,
        title: this.listName.value
      },
      optimisticResponse: {
        __typename: 'Mutation',
        addColumn: {
          __typename: 'Column',
          id: '1',
          title: this.listName.value
        }
      }
    }).subscribe(res => {
      this.boardDetail.columns.push(res.data.addColumn);
      this.listIds.push(res.data.addColumn.id);
    });
    this.listName.setValue('');
    this.closeListInput();
  }

  openListInput() {
    this.listInputBoxOpen = true;
    setTimeout(() => {
      this.listInput.nativeElement.focus();
      this.listInput.nativeElement.click();
    }, 0);
  }

  closeListInput() {
    this.listInputBoxOpen = false;
  }

  ngOnDestroy(): void {
    this.unSubscribe$.next();
    this.unSubscribe$.complete();
  }
}
