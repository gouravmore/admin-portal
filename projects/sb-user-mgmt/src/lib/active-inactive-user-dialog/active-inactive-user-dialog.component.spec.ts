import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveInactiveUserDialogComponent } from './active-inactive-user-dialog.component';

describe('ActiveInactiveUserDialogComponent', () => {
  let component: ActiveInactiveUserDialogComponent;
  let fixture: ComponentFixture<ActiveInactiveUserDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveInactiveUserDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveInactiveUserDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
