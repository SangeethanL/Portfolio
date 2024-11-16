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
    /*setTimeout(() => {
      this.webpageTS.init();
      this.webpageTS.scroll();
    }, 2000);
    window.addEventListener('scroll', this.scroll, true); //third parameter*/
  }

  ngAfterContentChecked() {
    this.webpageTS.init();
    this.webpageTS.scroll();
    window.addEventListener('scroll', this.scroll, true); //third parameter
  }

  scroll = (event: any): void => {
    this.webpageTS.scroll();
  };

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scroll, true);
  }

  /*@HostListener('window:scroll', ['$event']) // for window scroll events
onScroll(event:any) {
 console.log('NEEEE')
}*/


}
