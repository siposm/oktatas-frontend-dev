import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCommentsComponent } from './list-comments.component';

describe('ListCommentsComponent', () => {
  let component: ListCommentsComponent;
  let fixture: ComponentFixture<ListCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCommentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
