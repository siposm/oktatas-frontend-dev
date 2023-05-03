import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTeachersComponent } from './list-teachers.component';

describe('ListTeachersComponent', () => {
  let component: ListTeachersComponent;
  let fixture: ComponentFixture<ListTeachersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTeachersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTeachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
