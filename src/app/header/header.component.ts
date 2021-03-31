import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase/app';
import { take } from 'rxjs/operators';
import { FirebaseauthService } from '../services/firebaseauth.service';
import { FirebasedbService } from '../services/firebasedb.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public loginError: boolean = false;
  public loginSuccess: boolean = false;
  public allowedUserError: boolean = false;
  user: firebase.User;

  constructor(
    private fireauth: FirebaseauthService,
    private firestore: FirebasedbService,
    private router: Router) { }

  ngOnInit(): void {
    this.fireauth.user.subscribe(
      (originalUser: firebase.User) => {
        this.user = originalUser;
        console.log(this.user)
      }
    )
  }

  login() {
    this.fireauth.login().then(
      (user: firebase.auth.UserCredential) => {
        // codi correcte 
        let email = user.user.email;
        this.firestore.checkAllowedUser(email).pipe(take(1)).subscribe(
          (originalEmails: any[]) => {
            if (originalEmails.length == 1) {
              //correcte
              this.loginError = false;
              this.allowedUserError = false;
              this.loginSuccess = true;
              this.router.navigate(['/home']);
            }
            else {
              //login error
              this.loginError = true;
              this.allowedUserError = true;
              this.fireauth.logout();
            }
          }
        )
      }
    ).catch(
      (error: any) => {
        // codi quan no s'ha pogut fer login
      }
    )
  }

  logout(){
    this.fireauth.logout();
  }


}
