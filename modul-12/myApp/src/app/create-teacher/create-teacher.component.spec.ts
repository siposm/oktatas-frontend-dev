import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTeacherComponent } from './create-teacher.component';

describe('CreateTeacherComponent', () => {
  let component: CreateTeacherComponent;
  let fixture: ComponentFixture<CreateTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTeacherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
