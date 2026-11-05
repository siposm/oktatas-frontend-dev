import { Component } from '@angular/core';
import { Developer } from '../developer';

@Component({
  selector: 'app-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
	developers : Developer[] = []

	constructor() {
    this.load()
  }

	load(): void {
    let jsonArray = JSON.parse(localStorage.getItem("developersDB") ?? "[]")
    this.developers = Object.values(jsonArray).map(x => Object.assign(new Developer(), x))
  }

  save(): void {
    localStorage.setItem("developersDB", JSON.stringify(this.developers))
  }

	deleteDeveloper(developer : Developer): void {
    this.developers = this.developers.filter(x => x.id !== developer.id)
    // this.save()
  }
}
