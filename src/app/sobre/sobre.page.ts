import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardContent, IonButton, IonCardHeader, IonCardTitle} from '@ionic/angular/standalone';
import { NavController } from '@ionic/angular/standalone';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.page.html',
  styleUrls: ['./sobre.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonCardContent, IonButton, IonCardHeader, IonCardTitle ]
})
export class SobrePage implements OnInit {

  constructor(private navCTRL : NavController) { }

  showPageHome() {
    this.navCTRL.navigateBack('home');
  }

  ngOnInit() {
  }

}
