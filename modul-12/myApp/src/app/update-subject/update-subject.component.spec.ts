import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSubjectComponent } from './update-subject.component';

describe('UpdateSubjectComponent', () => {
  let component: UpdateSubjectComponent;
  let fixture: ComponentFixture<UpdateSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSubjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
