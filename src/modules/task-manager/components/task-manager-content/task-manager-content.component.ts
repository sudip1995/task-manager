import { Component, OnInit } from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';
import {MatDialog} from '@angular/material';
import {AddBoardDialogComponent} from '../dialog-components/add-board-dialog/add-board-dialog.component';
@Component({
  selector: 'app-task-manager-content',
  templateUrl: './task-manager-content.component.html',
  styleUrls: ['./task-manager-content.component.scss']
})
export class TaskManagerContentComponent implements OnInit {
  boards: any;

  constructor(private apollo: Apollo,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.apollo.watchQuery<any>({
      query: gql`
        query {
          boards {
            id
            title
          }
        }
      `
    }).valueChanges.subscribe(res => {
        this.boards = res.data.boards;
      }
    );
    /*this.boards = [{
      title: 'Board 1',
      lists: [{
        id: 1,
        title: 'List 1',
        tasks: [{
          title: 'Task 1',
          description: 'GGG'
        },
          {
            title: 'Task 2'
          },
          {
            title: 'Task 2'
          },
          {
            title: 'Task 2'
          },
          {
            title: 'Task 2'
          },
          {
            title: 'Task 2'
          },
          {
            title: 'Task 2'
          },
          {
            title: 'Task 2'
          }
        ]
      }, {
        id: 2,
        title: 'List 2',
        tasks: [{
          title: 'Task 1'
        },
          {
            title: 'Task 2'
          }
        ]
      }, {
        id: 3,
        title: 'List 3',
        tasks: []
      }, {
        id: 4,
        title: 'List 3',
        tasks: []
      }, {
        id: 5,
        title: 'List 3',
        tasks: []
      }, {
        id: 6,
        title: 'List 3',
        tasks: []
      }],
    }, {
      title: 'Board 2',
      lists: [{
        title: 'List 1',
        tasks: [{
          title: 'Task 1'
        },
          {
            title: 'Task 2'
          }
        ]
      }],
    }];*/
  }

  navigateToBoard(id: any) {

  }

  addBoard() {
    const dialogRef = this.dialog.open(AddBoardDialogComponent, {
      minWidth: '350px',
      maxWidth: '1000px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.event === 'ok') {
        this.apollo.mutate({
          mutation: gql`
          mutation ($board: BoardInputGraphType!) {
            addBoard(board: $board){
              id
              title
            }
          }
        `,
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
        });
      }
    });
  }
}
