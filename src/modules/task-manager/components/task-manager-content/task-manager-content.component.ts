import { Component, OnInit } from '@angular/core';
import {Apollo} from 'apollo-angular';
import {MatDialog} from '@angular/material';
import {AddBoardDialogComponent} from '../dialog-components/add-board-dialog/add-board-dialog.component';
import {ActivatedRoute, Router} from '@angular/router';
import {board} from '../../graphql/task-manager.query';
import {addBoard} from '../../graphql/task-manager.mutation';

@Component({
  selector: 'app-task-manager-content',
  templateUrl: './task-manager-content.component.html',
  styleUrls: ['./task-manager-content.component.scss']
})
export class TaskManagerContentComponent implements OnInit {
  boards: any;

  constructor(private apollo: Apollo,
              private dialog: MatDialog,
              private route: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.apollo.watchQuery<any>({
      query: board
    }).valueChanges.subscribe(res => {
        this.boards = res.data.boards;
      }
    );
  }

  navigateToBoard(id: any) {
    this.route.navigate(['.', id], {relativeTo: this.activatedRoute});
  }

  addBoard() {
    const dialogRef = this.dialog.open(AddBoardDialogComponent, {
      minWidth: '350px',
      maxWidth: '1000px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.event === 'ok') {
        this.apollo.mutate({
          mutation: addBoard,
          variables: {
            board: {
              title: result.data.value
            }
          },
          optimisticResponse: {
            __typename: 'Mutation',
            addBoard: {
              __typename: 'Board',
              id: '1',
              title: result.data.value
            }
          }
        }).subscribe(res => {
          this.boards.push(res.data.addBoard);
          this.route.navigate(['.', res.data.addBoard.id], {relativeTo: this.activatedRoute});
        });
      }
    });
  }
}
