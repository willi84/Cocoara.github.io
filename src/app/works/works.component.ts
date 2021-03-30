import { Component, OnInit } from '@angular/core';
import { Practiques } from '../models/practiques';
import { FirebasedbService } from '../services/firebasedb.service';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {

 
  ngOnInit(): void {
  }
  public PractiquesTotals: Practiques[] = [];
  public Practiques: Practiques;
  public PractiquesDetails: Practiques;


  constructor(private firebd: FirebasedbService) {
    this.Practiques = new Practiques();

    this.firebd.getPractiques().subscribe(
      (originalPractiques: Practiques[]) => {
        this.PractiquesTotals = originalPractiques;
        console.log(this.Practiques);
      }
    );
    this.PractiquesDetails = new Practiques();
  }

  loadCurrentPractiques(i: number) {
    this.Practiques = this.PractiquesTotals[i];
  }

}
