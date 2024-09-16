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
 

}
