import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCardAction]'
})
export class CardActionDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
