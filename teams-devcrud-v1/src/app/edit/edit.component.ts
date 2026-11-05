import { Component } from '@angular/core';
import { Developer } from '../developer';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  standalone: false,
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  developerToEdit: Developer = new Developer()

  constructor(public router: Router, route : ActivatedRoute) {
		route.params.subscribe(x => {
      let id = x["id"]
      let developers = this.load()
      this.developerToEdit = developers.find(d => d.id === id) as Developer
    })
  }

  load() : Developer[] {
    let jsonArray = JSON.parse(localStorage.getItem("developersDB") ?? "[]")
    return Object.values(jsonArray).map(x => Object.assign(new Developer(), x))
  }

  save() {
    let developers = this.load()
    let index = developers.findIndex(x => x.id === this.developerToEdit.id)
    developers[index] = this.developerToEdit
    localStorage.setItem("developersDB", JSON.stringify(developers))

    this.router.navigate(["list"])
  }
}