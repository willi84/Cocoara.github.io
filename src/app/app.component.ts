import { Component } from '@angular/core';
import { Practiques } from './models/practiques';
import { FirebasedbService } from './services/firebasedb.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public PractiquesTotals: Practiques[] = [];
  public Practiques: Practiques;
  public PractiquesDetails: Practiques;

  constructor(private firebd: FirebasedbService) {
    this.Practiques = new Practiques();

    this.firebd.getPractiques().subscribe(
      (originalPractiques: Practiques[]) => {
        this.PractiquesTotals = originalPractiques;
        console.log(this.PractiquesTotals);
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
    this.firebd.deletePractiques(this.Practiques[i].id);
  }

  loadCurrentPractiques(i: number) {
    this.Practiques = this.PractiquesTotals[i];
  }

  seeDetails(i: number) {
    this.PractiquesDetails = this.PractiquesTotals[i];
  }

  updatePractiques() {
    this.firebd.updatePractiques(this.PractiquesDetails.id, this.PractiquesDetails);
  }

  

}
