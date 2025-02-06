import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateSubjectComponent } from './update-subject.component';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';

describe('UpdateSubjectComponent', () => {
  let component: UpdateSubjectComponent;
  let fixture: ComponentFixture<UpdateSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateSubjectComponent],
      imports: [HttpClientModule, MatSnackBarModule, MatFormFieldModule, MatCheckboxModule, MatDividerModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of({ get: (param: string) => 'mockValue' }), // Mock paramMap metódus
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
