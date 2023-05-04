import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Subject } from '../_models/subject';

@Component({
  selector: 'app-update-subject',
  templateUrl: './update-subject.component.html',
  styleUrls: ['./update-subject.component.scss']
})
export class UpdateSubjectComponent {

  http: HttpClient
  route: ActivatedRoute
  subject: Subject
  snackBar:MatSnackBar

  constructor(http: HttpClient, route:ActivatedRoute, snackBar:MatSnackBar) {
    this.http = http
    this.route = route
    this.subject = new Subject()
    this.snackBar = snackBar
  }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      let subjectID = param['id']
      this.http
      .get<any>('https://practiceapi.nikprog.hu/Subject')
      .subscribe(resp => {
        resp.filter((x:any) => x.id === subjectID)
        .map((x:any) => {
          this.subject.id = x.id
          this.subject.name = x.name
          this.subject.neptun = x.neptun
          this.subject.credit = x.credit
          this.subject.exam = x.exam
          this.subject.image = x.image
          this.subject.creatorName = x.creatorName
          this.subject.registeredStudents = x.registeredStudents
        })
        
        console.log(this.subject)
      })
    })
  }

  public updateSubject() : void {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('nikprog-practiceapi-token')
    })

    console.log(headers);
    

    this.http
      .put(
        'https://practiceapi.nikprog.hu/Subject',
        this.subject,
        { headers: headers }
      )
      .subscribe(
        (success) => {
          this.snackBar.open("Update was successful!", "Close", { duration: 5000 })
        },
        (error) => {
          this.snackBar.open("Error occured, please try again.", "Close", { duration: 5000 })
        }
      )
  }
}
