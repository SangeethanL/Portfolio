import { Component,inject } from '@angular/core';
import { LanguagesComponent } from '../../models/languages';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {

  languagesTS = inject(LanguagesComponent);

  ngAfterViewInit() { 
    this.languagesTS.loadLanguage();
  }


}
