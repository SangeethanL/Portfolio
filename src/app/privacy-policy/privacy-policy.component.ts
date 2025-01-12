import { Component,inject } from '@angular/core';
import { LanguagesComponent } from '../../models/languages';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {

  constructor() {
    window.scrollTo(0,0)
  }

  languagesTS = inject(LanguagesComponent);

  goToParagraph(id:string) {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  ngAfterContentInit() { //ngAfterViewInit
    this.languagesTS.loadLanguage();
  }

}
