import { Component, inject } from '@angular/core';
import { LanguagesComponent } from '../../../models/languages';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  languagesTS = inject(LanguagesComponent);
 
  openMenu() {
    document.getElementById('responsive_menu')?.classList.add('rollOut');
    document.getElementById('menu')?.classList.add('display-none');
    document.getElementById('close')?.classList.add('display-unset');
    document.getElementById('languages')?.classList.add('fadeInLanguages');
  }

  closeMenu() {
    document.getElementById('responsive_menu')?.classList.remove('rollOut');
    document.getElementById('menu')?.classList.remove('display-none');
    document.getElementById('close')?.classList.remove('display-unset');
    document.getElementById('languages')?.classList.remove('fadeInLanguages');
  }

  goHome() {
    if(window.location.pathname.endsWith("/imprint")) {
      window.location.href = "#link_to_startScreen";
    }
  }

  activateCursor() {
    if(window.location.pathname.endsWith("/imprint")) {
      document.getElementById('logo')?.classList.add('cursor');
    }
  }

}
