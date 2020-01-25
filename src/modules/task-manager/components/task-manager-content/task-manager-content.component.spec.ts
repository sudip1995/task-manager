import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskManagerContentComponent } from './task-manager-content.component';

describe('TaskManagerContentComponent', () => {
  let component: TaskManagerContentComponent;
  let fixture: ComponentFixture<TaskManagerContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskManagerContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskManagerContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
