import { Component } from '@angular/core';
import { ImprintComponent } from '../../imprint/imprint.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ImprintComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  goToContact() {
    if(window.location.pathname.endsWith("/imprint")) {
      window.location.href = "#contact";
    }
  }
 
}
