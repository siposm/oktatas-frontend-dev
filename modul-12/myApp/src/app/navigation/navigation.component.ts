import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  
  api:ApiService

  constructor(api: ApiService) {
    this.api = api
  }
}
