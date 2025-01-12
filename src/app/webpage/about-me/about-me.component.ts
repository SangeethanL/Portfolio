import { Component, inject } from '@angular/core';
import { WebpageComponent } from '../webpage.component';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {

  webpageComponent = inject(WebpageComponent);
}
