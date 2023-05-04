import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Teacher } from '../_models/teacher';

@Component({
  selector: 'app-create-teacher',
  templateUrl: './create-teacher.component.html',
  styleUrls: ['./create-teacher.component.scss']
})
export class CreateTeacherComponent {
  http: HttpClient
  teacher: Teacher
  snackBar: MatSnackBar

  constructor(http: HttpClient, snackBar: MatSnackBar) {
    this.http = http
    this.teacher = new Teacher()
    this.snackBar = snackBar
  }

  public createTeacher() : void {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('nikprog-practiceapi-token')
    })
    this.http
      .post(
        'https://practiceapi.nikprog.hu/Teacher',
        this.teacher,
        { headers: headers }
      )
      .subscribe(
        (success) => {
          this.snackBar.open('Create was successful!', 'Close', { duration: 5000 })
        },
        (error) => {
          this.snackBar.open('Error occured, please try again.', 'Close', { duration: 5000 })
        }
      )
  }
}
