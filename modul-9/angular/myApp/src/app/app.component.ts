import { Component } from '@angular/core';


class Subject {
  name: string = ''
  credit: number = 0
  constructor(name: string, credit: number) {
    this.name = name
    this.credit = credit
  }
}



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myApp'
  person = {
    name: 'John Doe',
    birthYear: 1998
  }

  subjects: Array<Subject> = [
    new Subject('JS', 3),
    new Subject('PHP', 4),
    new Subject('C#', 30),
  ]

  public styleCheck(item: Subject) {
    if (item.credit > 3)
      return 'color: green'
    return 'color: red'
  }
}
