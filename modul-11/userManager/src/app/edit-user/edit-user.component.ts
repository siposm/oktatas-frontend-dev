import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../_models/user';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  
  userId:any
  route:ActivatedRoute
  http:HttpClient
  user: User
  editIsDisabled: boolean

  constructor(route:ActivatedRoute, http:HttpClient) {
    this.route = route
    this.http = http
    this.editIsDisabled = true
    this.user = new User()
  }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.http.get<User>('https://dummyjson.com/users/' + param['id'])
      .subscribe(resp => {

        this.user.id = resp.id
        this.user.firstName = resp.firstName
        this.user.lastName = resp.lastName
        this.user.age = resp.age
        this.user.gender = resp.gender
        this.user.email = resp.email
        this.user.phone = resp.phone
        this.user.username = resp.username
        this.user.password = resp.password
        this.user.birthDate = resp.birthDate
        this.user.image = resp.image

      }, error => {
        console.error('Error happened!', error)
      })
    })
  }

  public updateUser() {
    this.http.put('https://dummyjson.com/users/' + this.user.id, this.user)
    .subscribe(
      (success) => console.log(success),
      (error)  =>  console.log(error)
    )
  }

}
