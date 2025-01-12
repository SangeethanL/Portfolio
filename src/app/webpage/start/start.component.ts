import { Component, inject} from '@angular/core';
import { WebpageComponent } from '../webpage.component';

@Component({
  selector: 'app-start',
  standalone: true,
  imports: [],
  templateUrl: './start.component.html',
  styleUrl: './start.component.scss'
})
export class StartComponent {
 webpageComponent = inject(WebpageComponent);
 
  switchToLeft(image: string) {
    document.getElementById(image)?.classList.remove('return');
    document.getElementById(image)?.classList.add('hover_side_icons');
  }

  returnToRight(image: string) {
    document.getElementById(image)?.classList.remove('hover_side_icons');
    document.getElementById(image)?.classList.add('return');
  }

}
