import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDetailMenuComponent } from './card-detail-menu.component';

describe('CardDetailMenuComponent', () => {
  let component: CardDetailMenuComponent;
  let fixture: ComponentFixture<CardDetailMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardDetailMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDetailMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
