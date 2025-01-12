import { Component } from '@angular/core';
import { ImprintComponent } from '../../imprint/imprint.component';
import { Router, RouterLink, RouterOutlet } from '@angular/router'

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ImprintComponent, RouterLink, RouterOutlet],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  constructor(private router: Router) {
    window.scrollTo(0, 0)
  }

  goToContact() {
    this.router.navigateByUrl('/').then(
      () => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    )
  }

}
