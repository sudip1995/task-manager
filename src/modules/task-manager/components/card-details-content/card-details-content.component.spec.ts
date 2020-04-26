import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDetailsContentComponent } from './card-details-content.component';

describe('CardDetailsContentComponent', () => {
  let component: CardDetailsContentComponent;
  let fixture: ComponentFixture<CardDetailsContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardDetailsContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDetailsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
