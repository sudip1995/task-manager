import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-card-details-content',
  templateUrl: './card-details-content.component.html',
  styleUrls: ['./card-details-content.component.scss']
})
export class CardDetailsContentComponent implements OnInit {

  @Input() cardDetails: any;

  description: FormControl;

  constructor() {
    this.description = new FormControl();
  }

  ngOnInit() {
    console.log(this.cardDetails);
  }

}
