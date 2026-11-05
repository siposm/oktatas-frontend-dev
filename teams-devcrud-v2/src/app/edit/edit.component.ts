import { Component } from '@angular/core';
import { Developer } from '../models/developer';
import { ActivatedRoute, Router } from '@angular/router';
import { DeveloperService } from '../services/developer.service';

@Component({
  selector: 'app-edit',
  standalone: false,
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  developerToEdit: Developer = new Developer()

  constructor(public router: Router, route : ActivatedRoute, private service: DeveloperService) {
		route.params.subscribe(x => {
      let id = x["id"]
      this.developerToEdit = this.service.findById(id)
    })
  }

  save() {
		// update via service
		this.service.update(this.developerToEdit)

		// redirect
    this.router.navigate(["list"])
  }
}