import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SbUserMgmtComponent } from './sb-user-mgmt.component';

describe('SbUserMgmtComponent', () => {
  let component: SbUserMgmtComponent;
  let fixture: ComponentFixture<SbUserMgmtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SbUserMgmtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SbUserMgmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
