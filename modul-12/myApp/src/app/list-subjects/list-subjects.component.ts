import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subject } from '../_models/subject';

@Component({
  selector: 'app-list-subjects',
  templateUrl: './list-subjects.component.html',
  styleUrls: ['./list-subjects.component.scss']
})
export class ListSubjectsComponent implements OnInit {
  http: HttpClient
  subjects: Array<Subject>

  constructor(http: HttpClient) {
    this.http = http
    this.subjects = []
  }

  ngOnInit(): void {
    this.http
    .get<Array<Subject>>('https://practiceapi.nikprog.hu/Subject')
    .subscribe(resp => {
      resp.map(x => {
        let s = new Subject()
        s.id = x.id
        s.name = x.name
        s.neptun = x.neptun
        s.credit = x.credit
        s.exam = x.exam
        s.image = x.image
        s.creatorName = x.creatorName
        s.registeredStudents = x.registeredStudents
        this.subjects.push(s)
      })
      console.log(this.subjects);
      
    })
  }
}
