import { Component } from '@angular/core';
import { Developer } from '../models/developer';
import { DeveloperService } from '../services/developer.service';

@Component({
  selector: 'app-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
	constructor(public service: DeveloperService) { }

	// get developers(): Developer[] {
	// 	return this.service.developers
	// }

	delete(developer : Developer): void {
    this.service.delete(developer)
  }
}
