import { Component, inject } from '@angular/core';
import { LanguagesComponent } from '../../../models/languages';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private router: Router) {
  }
  languagesTS = inject(LanguagesComponent);

  scrollIntoView(id: string) {
    this.router.navigateByUrl('/')
    .then(
      () => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' }))
  }

  openMenu() {
    document.getElementById('responsive_menu')?.classList.add('rollOut');
    document.getElementById('menu')?.classList.add('display-none');
    document.getElementById('close')?.classList.add('display-unset');
    document.getElementById('languages')?.classList.add('fadeInLanguages');
    document.getElementById('logo_responsive')?.classList.remove('logoResponsiveNormalOpacity');
    document.getElementById('logo_responsive')?.classList.add('logoResponsiveOpenedOpacity');
  }

  closeMenu() {
    document.getElementById('responsive_menu')?.classList.remove('rollOut');
    document.getElementById('menu')?.classList.remove('display-none');
    document.getElementById('close')?.classList.remove('display-unset');
    document.getElementById('languages')?.classList.remove('fadeInLanguages');
    document.getElementById('logo_responsive')?.classList.add('logoResponsiveNormalOpacity');
    document.getElementById('logo_responsive')?.classList.remove('logoResponsiveOpenedOpacity');
  }

  goHome() {
    if (window.location.href.endsWith("imprint") || window.location.href.includes("privacyPolicy")) {
      this.router.navigateByUrl('/')
    }
  }

  activateCursor() {
    if (window.location.href.endsWith("imprint") || window.location.href.includes("privacyPolicy")) {
      document.getElementById('logo')?.classList.add('cursor');
    }
  }

}
