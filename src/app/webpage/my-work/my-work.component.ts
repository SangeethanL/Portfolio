import { Component } from '@angular/core';

@Component({
  selector: 'app-my-work',
  standalone: true,
  imports: [],
  templateUrl: './my-work.component.html',
  styleUrl: './my-work.component.scss'
})
export class MyWorkComponent {

  imgMouseoverJoin() {
    document.getElementById('joinImg')?.classList.add('hoveringOverImage');
    document.getElementById('joinArrow')?.classList.add('activateArrow');
    document.getElementById('joinInfos')?.classList.add('fadeInInfos');
  }

  imgMouseoverSharkie() {
    document.getElementById('sharkieImg')?.classList.add('hoveringOverImage');
    document.getElementById('sharkieArrow')?.classList.add('activateArrowReverse');
    document.getElementById('sharkieInfos')?.classList.add('fadeInInfosReverse');
  }

  imgMouseoverPokedex() {
    document.getElementById('pokedexImg')?.classList.add('hoveringOverImage');
    document.getElementById('pokedexArrow')?.classList.add('activateArrow');
    document.getElementById('pokedexInfos')?.classList.add('fadeInInfos');
  }

  imgMouseleave() {
    document.getElementById('joinImg')?.classList.remove('hoveringOverImage');
    document.getElementById('joinArrow')?.classList.remove('activateArrow');
    document.getElementById('joinInfos')?.classList.remove('fadeInInfos');

    document.getElementById('sharkieImg')?.classList.remove('hoveringOverImage');
    document.getElementById('sharkieArrow')?.classList.remove('activateArrowReverse');
    document.getElementById('sharkieInfos')?.classList.remove('fadeInInfosReverse');

    document.getElementById('pokedexImg')?.classList.remove('hoveringOverImage');
    document.getElementById('pokedexArrow')?.classList.remove('activateArrow');
    document.getElementById('pokedexInfos')?.classList.remove('fadeInInfos');
  }

}
