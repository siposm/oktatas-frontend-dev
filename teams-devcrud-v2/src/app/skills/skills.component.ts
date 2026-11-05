import { Component } from '@angular/core';
import { SkillService } from '../services/skill.service';

@Component({
  selector: 'app-skills',
  standalone: false,
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
	constructor(public service: SkillService) { }
}
