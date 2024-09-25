import { Component, inject } from '@angular/core';
import { FunctionsComponent } from '../../models/functions';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  functions = inject(FunctionsComponent);
 
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

}
