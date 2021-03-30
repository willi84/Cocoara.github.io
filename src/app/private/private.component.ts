import { Component, OnInit } from '@angular/core';
import { Practiques } from '../models/practiques';
import { FirebasedbService } from '../services/firebasedb.service';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.css']
})
export class PrivateComponent implements OnInit {

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

  clearPractiques() {
    this.Practiques = new Practiques();
  }


  addPractiques() {
    this.firebd.addPractiques(this.PractiquesDetails);
  }

  deletePractiques(i: number) {
    this.firebd.deletePractiques(this.PractiquesTotals[i].id);
  }

  loadCurrentPractiques(i: number) {
    this.Practiques = this.PractiquesTotals[i];
  }

  updatePractiques() {
    this.firebd.updatePractiques(this.PractiquesDetails.id, this.PractiquesDetails);
  }

  seeDetails(i: number) {
    console.log(i);
    this.PractiquesDetails = this.PractiquesTotals[i];
    console.log(this.PractiquesDetails);
  }


  ngOnInit(): void {
  }

}
