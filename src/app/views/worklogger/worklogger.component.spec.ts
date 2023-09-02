import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkloggerComponent } from './worklogger.component';

describe('WorkloggerComponent', () => {
  let component: WorkloggerComponent;
  let fixture: ComponentFixture<WorkloggerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkloggerComponent]
    });
    fixture = TestBed.createComponent(WorkloggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
