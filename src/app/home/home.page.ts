import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonAvatar, IonCard, IonCardHeader, IonCardTitle, IonCardContent,IonButton} from '@ionic/angular/standalone';
import { NavController } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonAvatar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton],
})
export class HomePage {
  constructor(private navCTRL : NavController) {}

  showPageSobre() {
    this.navCTRL.navigateForward('sobre');
  }
}
