import { Component } from '@angular/core'
import { Developer } from '../developer'
import { Router } from '@angular/router'

@Component({
  selector: 'app-create',
  standalone: false,
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',
})
export class CreateComponent {
  developer: Developer
  router: Router

  constructor(router: Router) {
    this.router = router
    this.developer = new Developer()
  }

  save() {
    // load
    let jsonArray = JSON.parse(localStorage.getItem("developersDB") ?? "[]")
    let developers = Object.values(jsonArray).map((x) =>
      Object.assign(new Developer(), x),
    )

    // add new item
    developers.push(this.developer)

    // save
    localStorage.setItem("developersDB", JSON.stringify(developers))

    // redirect
    this.router.navigate(["list"])
  }
}
