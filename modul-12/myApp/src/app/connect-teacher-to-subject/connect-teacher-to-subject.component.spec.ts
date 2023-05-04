import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectTeacherToSubjectComponent } from './connect-teacher-to-subject.component';

describe('ConnectTeacherToSubjectComponent', () => {
  let component: ConnectTeacherToSubjectComponent;
  let fixture: ComponentFixture<ConnectTeacherToSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectTeacherToSubjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConnectTeacherToSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
