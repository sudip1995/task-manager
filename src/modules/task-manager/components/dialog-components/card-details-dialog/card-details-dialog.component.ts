import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {boardById, cardDetailsById} from '../../../graphql/task-manager.query';
import {Apollo} from 'apollo-angular';

@Component({
  selector: 'app-card-details-dialog',
  templateUrl: './card-details-dialog.component.html',
  styleUrls: ['./card-details-dialog.component.scss']
})
export class CardDetailsDialogComponent implements OnInit {

  cardDetails: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private apollo: Apollo) {
  }

  ngOnInit() {
    this.loadCardDetail(this.data.cardId);
  }

  private loadCardDetail(ticketId: any) {
    this.apollo.watchQuery<any>({
      query: cardDetailsById,
      variables: {
        ticketId
      }
    }).valueChanges.subscribe(res => {
        this.cardDetails = res.data.ticketDetails;
      }
    );
  }

}
