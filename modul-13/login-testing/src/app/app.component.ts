import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  name: string = ''
  password: string = ''

  buttonDisabled(): boolean {
    return this.name.length < 5 || this.password.length < 5
  }

  login(): void {
    console.log("login done :)")
  }
}
