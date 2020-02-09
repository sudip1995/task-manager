import {Component, Input, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  @Input() boardDetail: any;
  listIds: string[];
  listName: FormControl;
  constructor() { }

  ngOnInit() {
    this.listIds = this.boardDetail.lists.map(l => `${l.id}`);
    this.listName = new FormControl();
  }

  drop(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.boardDetail.lists, event.previousIndex, event.currentIndex);
    this.listIds = this.boardDetail.lists.map(l => `${l.id}`);
  }
}
