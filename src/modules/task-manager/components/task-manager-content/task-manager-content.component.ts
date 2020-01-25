import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-manager-content',
  templateUrl: './task-manager-content.component.html',
  styleUrls: ['./task-manager-content.component.scss']
})
export class TaskManagerContentComponent implements OnInit {
  boards: any;

  constructor() { }

  ngOnInit() {
    this.boards = [{
      title: 'Board 1',
      lists: [{
        title: 'List 1',
        tasks: [{
          title: 'Task 1'
        },
          {
            title: 'Task 2'
          }
        ]
      }, {
        title: 'List 2',
        tasks: [{
          title: 'Task 1'
        },
          {
            title: 'Task 2'
          }
        ]
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
