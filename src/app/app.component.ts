import { Component, inject, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './footer-header/header/header.component';
import { FooterComponent } from './footer-header/footer/footer.component';
import { LanguagesComponent } from '../models/languages';
import { WebpageFunctions } from '../models/webpageFunctions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
  languagesTS = inject(LanguagesComponent);
  webpageTS = inject(WebpageFunctions);

  constructor() {
      setTimeout(() => {
        this.webpageTS.init();
      }, 2000);
    setTimeout(() => {
      this.languagesTS.loadLanguage();
    }, 1000);
    window.addEventListener('scroll', this.scroll, true); //third parameter
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scroll, true);
  }

  scroll = (event: any): void => {
    this.webpageTS.scroll();
  };

  /*@HostListener('window:scroll', ['$event']) // for window scroll events
onScroll(event:any) {
 console.log('NEEEE')
}*/


}
