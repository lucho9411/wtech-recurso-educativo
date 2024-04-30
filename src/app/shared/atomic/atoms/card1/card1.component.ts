import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-card1',
  templateUrl: './card1.component.html',
  styleUrl: './card1.component.scss'
})
export class Card1Component {

  safeSrc: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) { 
    this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/JOipLXnlZZ8?si=YS1_8sDUrxjdTIa5");
  }

}
