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
      title: 'Välkommen',
      subtitle: 'Veronica Andersson',
      description: 'Vår VD är Veronica, det är hon som har koll på vad som behöver vara på plats i och med din anställningsstart',
      imageUrl: 'https://www.w3schools.com/howto/img_avatar.png',
      urlNamn: 'Maconomy',
      url: 'https://me50653-iaccess.deltekfirst.com/oauth'
    },
    {
      imageAvatarUrl: 'https://th.bing.com/th/id/OIG.2cFXsriBPnvyLfdE5jag?pid=ImgGn',
      title: 'Buddy/coach',
      description: 'Du har säkert redan träffat din Buddy, som är den som håller ihop din intro och har lite extra koll på att du får svar på dina frågor och funderingar. Sen efter några månader när du kommit igång, så kommer du få möjlighet att själv önska en coach.  ',
      imageUrl: 'https://th.bing.com/th/id/OIG.2cFXsriBPnvyLfdE5jag?pid=ImgGn',
      urlNamn: 'Buddy/coach',
      url: 'http://www.url2.com'
    },
    {
      imageAvatarUrl: 'https://th.bing.com/th/id/OIG.VBrZKMr3FOvzlq5Zlewt?pid=ImgGn', 
      title: 'Startklar',
      description: 'Beskrivning för blomblad 2',
      imageUrl: 'https://th.bing.com/th/id/OIG.VBrZKMr3FOvzlq5Zlewt?pid=ImgGn',
      urlNamn: 'Startklar',
      url: 'http://www.url2.com'
    },
    {
      title: 'Anställning och admin',
      description: 'Beskrivning för blomblad 2',
      imageUrl: 'https://th.bing.com/th/id/OIG.VBrZKMr3FOvzlq5Zlewt?pid=ImgGn'
      urlNamn: 'Anställning och admin',
      url: 'http://www.url2.com'
    },
    {
      title: 'Digital setup',
      description: 'Beskrivning för blomblad 2',
      imageUrl: 'https://th.bing.com/th/id/OIG.VBrZKMr3FOvzlq5Zlewt?pid=ImgGn',
      urlNamn: 'Digital setup',
      url: 'http://www.url2.com'
    },
    {
      title: 'Konsultrollen ',
      description: 'Konsultrollen',
      imageUrl: 'https://th.bing.com/th/id/OIG.VBrZKMr3FOvzlq5Zlewt?pid=ImgGn',
      urlNamn: 'Startklar',
      url: 'http://www.url2.com'
    },
    {
      title: 'Konsultrollen ',
      description: 'Beskrivning för blomblad 2',
      imageUrl: 'https://th.bing.com/th/id/OIG.VBrZKMr3FOvzlq5Zlewt?pid=ImgGn',
      urlNamn: 'Startklar',
      url: 'http://www.url2.com'
    },
    {
      title: 'Konsultrollen',
      description: 'Beskrivning för blomblad 2',
      imageUrl: 'https://th.bing.com/th/id/OIG.VBrZKMr3FOvzlq5Zlewt?pid=ImgGn',
      urlNamn: 'Startklar',
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