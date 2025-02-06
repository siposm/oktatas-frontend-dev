import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTeachersComponent } from './list-teachers.component';
import { HttpClientModule } from '@angular/common/http';

describe('ListTeachersComponent', () => {
  let component: ListTeachersComponent;
  let fixture: ComponentFixture<ListTeachersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTeachersComponent ],
      imports: [HttpClientModule]
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
