import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTeacherComponent } from './update-teacher.component';

describe('UpdateTeacherComponent', () => {
  let component: UpdateTeacherComponent;
  let fixture: ComponentFixture<UpdateTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTeacherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
