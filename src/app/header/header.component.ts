import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/app';
import { FirebaseauthService } from '../services/firebaseauth.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public user!: firebase.User;

  constructor(private fireauth: FirebaseauthService) { }

  ngOnInit(): void {
    this.fireauth.user.subscribe(
      (originalUser: firebase.User) => {
        this.user = originalUser;
        console.log(this.user)
      }
    )
  }

}
