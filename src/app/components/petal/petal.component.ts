import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MatDrawer } from '@angular/material/sidenav';

export interface Petal {
  imageAvatarUrl?: string;
  title?: string;
  subtitle?: string;
  description: string;
  imageUrl?: string;
  urlNamn?: string;
  url?: string;
}

@Component({
  selector: 'app-petal',
  template: `
    <div class="petal" (click)="openTaskListDialog()">
      <!-- Basic petal visual -->
    </div>
  `,
  templateUrl: './petal.component.html',
  styleUrls: ['./petal.component.css']
})
export class PetalComponent {
  @ViewChild('drawer') sidenav!: MatDrawer;
  selectedPetal: Petal | null = null;
  petals: Petal[] = [
    {
      imageAvatarUrl: 'https://www.w3schools.com/howto/img_avatar.png',
      title: 'Anställning och admin',
      subtitle: 'Veronica Andersson',
      description: 'Vår VD är Veronica, det är hon som har koll på vad som behöver vara på plats i och med din anställningsstart',
      imageUrl: 'https://www.w3schools.com/howto/img_avatar.png',
      urlNamn: 'Maconomy',
      url: 'https://me50653-iaccess.deltekfirst.com/oauth'
    },
    {
      title: 'Blomblad 2',
      description: 'Beskrivning för blomblad 2',
      imageUrl: 'data.jpg',
      url: 'http://www.url2.com'
    },
    {
      title: 'Blomblad 3',
      description: 'Beskrivning för blomblad 2',
      imageUrl: 'bild2.jpg',
      url: 'http://www.url2.com'
    },
    {
      title: 'Blomblad 4',
      description: 'Beskrivning för blomblad 2',
      imageUrl: 'bild2.jpg',
      url: 'http://www.url2.com'
    },
    {
      description: 'Beskrivning för blomblad 2',
      imageUrl: 'bild2.jpg',
      url: 'http://www.url2.com'
    },
    {
      description: 'Beskrivning för blomblad 2',
      imageUrl: 'bild2.jpg',
      url: 'http://www.url2.com'
    },
    {
      description: 'Beskrivning för blomblad 2',
      imageUrl: 'bild2.jpg',
      url: 'http://www.url2.com'
    },
    {
      description: 'Beskrivning för blomblad 2',
      imageUrl: 'bild2.jpg',
      url: 'http://www.url2.com'
    },
    
  ];


@Input() petal: Petal = { description: '', imageUrl: '', url: '' }; // Provide a default value  
@Output() petalClicked: EventEmitter<Petal> = new EventEmitter();




  constructor() {}

onPetalClick(petal: Petal) {
  this.selectedPetal = petal;

  if (!this.sidenav.opened) {
    this.sidenav.open();
  }
}
}