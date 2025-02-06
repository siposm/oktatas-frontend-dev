import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSubjectsComponent } from './list-subjects.component';
import { HttpClientModule } from '@angular/common/http';

describe('ListSubjectsComponent', () => {
  let component: ListSubjectsComponent;
  let fixture: ComponentFixture<ListSubjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSubjectsComponent ],
      imports: [HttpClientModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
