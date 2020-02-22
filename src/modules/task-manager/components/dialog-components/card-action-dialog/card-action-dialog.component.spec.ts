import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardActionDialogComponent } from './card-action-dialog.component';

describe('CardActionDialogComponent', () => {
  let component: CardActionDialogComponent;
  let fixture: ComponentFixture<CardActionDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardActionDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardActionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
