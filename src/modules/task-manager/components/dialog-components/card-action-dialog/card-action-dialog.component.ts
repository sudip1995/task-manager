import {Component, ComponentFactoryResolver, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {CardActionDirective} from '../../directives/card-action.directive';

@Component({
  selector: 'app-card-action-dialog',
  templateUrl: './card-action-dialog.component.html',
  styleUrls: ['./card-action-dialog.component.scss']
})
export class CardActionDialogComponent implements OnInit {
  @ViewChild(CardActionDirective, {static: true}) cardActionHost: CardActionDirective;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.loadComponent();
  }

  private loadComponent() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.data.component);
    const viewContainerRef = this.cardActionHost.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(componentFactory);
  }
}
