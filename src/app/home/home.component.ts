import { Component, OnInit } from '@angular/core';
import { Portfolio } from '../models/portfolio';
import { FirebasedbService } from '../services/firebasedb.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 constructor(){}
  
  ngOnInit(): void {
  }

}
