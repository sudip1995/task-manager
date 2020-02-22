import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyCardComponent } from './copy-card.component';

describe('CopyCardComponent', () => {
  let component: CopyCardComponent;
  let fixture: ComponentFixture<CopyCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CopyCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CopyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
