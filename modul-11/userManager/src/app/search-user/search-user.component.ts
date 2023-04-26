import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.scss']
})
export class SearchUserComponent implements OnInit {
  
  http: HttpClient
  users: Array<any>
  route:ActivatedRoute
  user: any

  constructor(http: HttpClient, route:ActivatedRoute) {
    this.http = http
    this.route = route
    this.user = {}
    this.users = []
  }
  
  ngOnInit(): void {
    this.route.params.subscribe(param => {
      let searchedUserName = param['username']

      this.http.get<any>('https://dummyjson.com/users')
      .subscribe(
        resp => {
          this.users = resp.users

          this.user = this.users.find(x => 
            x.firstName.toUpperCase() === searchedUserName.toUpperCase() ||
            x.lastName.toUpperCase() === searchedUserName.toUpperCase() || 
            x.username.toUpperCase() === searchedUserName.toUpperCase()
          )
        },
        err => console.log(err)
      )
    })
  }

  public getProperties() {
    let s: Array<any> = []
    Object.entries(this.user).forEach(([key, value]) => {
      s.push(`${key}: ${value}`)
    })
    return s
  }
}
