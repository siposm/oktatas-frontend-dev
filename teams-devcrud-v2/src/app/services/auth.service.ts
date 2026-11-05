import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { Token } from '../models/token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  login(user: User): void {
    this.http.post<Token>("https://api.siposm.hu/login", user).subscribe({
      next: (response) => {
        console.log("::SUCCESS::")
        console.log("LOGIN REQUEST RESULT: ", response)
        localStorage.setItem("auth-token", response.token)
        this.router.navigate(["/list"])
      },
      error: (error) => {
        console.log("::ERROR::")
        console.log("LOGIN REQUEST RESULT: ", error)
      }
    })
  }

  logout(): void {
    localStorage.removeItem("auth-token")
    this.router.navigate(["/login"])
  }

  canActivate(): boolean {
    return this.isLoggedIn()
  }

  isLoggedIn(): boolean {
    return (localStorage.getItem("auth-token") ?? "").length > 10
  }
}
