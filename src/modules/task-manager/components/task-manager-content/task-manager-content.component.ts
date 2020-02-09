import { Component, OnInit } from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';
@Component({
  selector: 'app-task-manager-content',
  templateUrl: './task-manager-content.component.html',
  styleUrls: ['./task-manager-content.component.scss']
})
export class TaskManagerContentComponent implements OnInit {
  boards: any;

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.boards = this.apollo.watchQuery<any>({
      query: gql`
        query {
          boards {
            id
            title
          }
        }
      `
    }).valueChanges.subscribe(res => {
        console.log(res.data.boards);
        return res.data.boards;
      }
    );
    this.boards = [{
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
    }];
  }

}
