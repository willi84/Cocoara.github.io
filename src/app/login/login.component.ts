import { Component, OnInit } from '@angular/core';
import { FirebaseauthService } from '../services/firebaseauth.service';
import { take } from 'rxjs/operators';

import firebase from 'firebase/app';
import { FirebasedbService } from '../services/firebasedb.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginError: boolean = false;
  public allowedUserError: boolean = false;

  constructor(
    private fireauth: FirebaseauthService,
     private firestore: FirebasedbService,
     private router: Router
     ) { }

  ngOnInit(): void {
  }

  login(){
    this.fireauth.login().then(
      (user: firebase.auth.UserCredential) => {
        // codi correcte 
        let email= user.user.email;
        this.firestore.checkAllowedUser(email).pipe(take(1)).subscribe(
          (originalEmails: any[]) => {
            if(originalEmails.length == 1){
              //correcte
              this.loginError = false;
              this.allowedUserError = false;
              this.router.navigate(['/home']);
            }
            else{
              //login error
              this.loginError = true;
              this.allowedUserError = true;
              this.fireauth.logout(); 
            }
          }
        )
        console.log(email);
      }
    ).catch(
      (error: any) => {
        // codi quan no s'ha pogut fer login
      }
    )
  }
  

}
