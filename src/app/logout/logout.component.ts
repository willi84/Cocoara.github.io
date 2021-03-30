import { Component, OnInit } from '@angular/core';
import { FirebaseauthService } from '../services/firebaseauth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private fireauth: FirebaseauthService) { }

  ngOnInit(): void {
  }

  logout(){
    this.fireauth.logout();
  }

}
