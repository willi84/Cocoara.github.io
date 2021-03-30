import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireAuthGuard, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';


import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PrivateComponent } from './private/private.component';
import { WorksComponent } from './works/works.component';

const redirectLoggedInToPrivate = () => redirectLoggedInTo(['private']);
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'works', component: WorksComponent},
  {path: 'private', component: PrivateComponent,  canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectLoggedInToPrivate  }},
  {path: 'login', component: LoginComponent,  canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin  }},
  {path: 'logout', component: LogoutComponent,  canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin  }}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
