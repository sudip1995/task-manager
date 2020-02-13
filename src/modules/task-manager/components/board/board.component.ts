import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {FormControl} from '@angular/forms';
import {Apollo} from 'apollo-angular';
import {ActivatedRoute} from '@angular/router';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';
import {boardById} from '../../graphql/task-manager.query';

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
  constructor(private apollo: Apollo,
              private activatedRoute: ActivatedRoute) {
    this.listName = new FormControl();
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
    moveItemInArray(this.boardDetail.columns, event.previousIndex, event.currentIndex);
    this.listIds = this.boardDetail.columns.map(l => `${l.id}`);
  }

  ngOnDestroy(): void {
    this.unSubscribe$.next();
    this.unSubscribe$.complete();
  }
}
