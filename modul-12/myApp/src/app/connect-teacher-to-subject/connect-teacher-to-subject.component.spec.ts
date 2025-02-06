import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectTeacherToSubjectComponent } from './connect-teacher-to-subject.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule } from '@angular/forms';

describe('ConnectTeacherToSubjectComponent', () => {
  let component: ConnectTeacherToSubjectComponent;
  let fixture: ComponentFixture<ConnectTeacherToSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConnectTeacherToSubjectComponent],
      imports: [
        HttpClientModule,
        MatSnackBarModule,
        MatFormFieldModule,
        MatSelectModule,
        MatDividerModule,
        FormsModule
      ]
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
