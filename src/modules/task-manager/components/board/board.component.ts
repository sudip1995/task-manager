import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  @Input() boardDetail: any;

  constructor() { }

  ngOnInit() {
    console.log(this.boardDetail);
  }

}
