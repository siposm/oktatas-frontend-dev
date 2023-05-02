import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Comment } from "../_models/comment";
import { User } from '../_models/user';

@Component({
  selector: 'app-list-comments',
  templateUrl: './list-comments.component.html',
  styleUrls: ['./list-comments.component.scss']
})
export class ListCommentsComponent {
  
  orderByDescending: boolean
  http: HttpClient
  comments: Array<Comment>

  constructor(http: HttpClient) {
    this.http = http
    this.comments = []
    this.orderByDescending = false
    this.getAllComments()
  }

  public getAllComments() {
    this.http.get<any>('https://dummyjson.com/comments')
    .subscribe(resp => {
      resp.comments.map((x:any) => {
        
        let c = new Comment()

        c.id = x.id
        c.body = x.body
        c.postId = x.postId
        c.user = new User()
        c.user.id = x.user.id
        c.user.username = x.user.username
        c.user.image = this.generateRandomAvatar()
        
        this.comments.push(c)
      })
    })
  }
  private generateRandomAvatar() : string {
    let index = Math.floor(Math.random() * 53)
    return `https://xsgames.co/randomusers/assets/avatars/pixel/${index}.jpg`
  }

  public likeComment(comment: Comment) {
    this.comments.find(x => x.id === comment.id)!.likeCounter++
  }

  public dislikeComment(comment: Comment) {
    this.comments.find(x => x.id === comment.id)!.likeCounter--
  }

  public orderByLikeNumber() {
    
    if(this.orderByDescending)
      this.comments.sort((a:Comment, b:Comment) => a.likeCounter - b.likeCounter)
    else
      this.comments.sort((a:Comment, b:Comment) => b.likeCounter - a.likeCounter)

    this.orderByDescending = !this.orderByDescending
  }
}
