import { Component } from '@angular/core';
import { StartComponent } from './start/start.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillSetComponent } from './skill-set/skill-set.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { ContactComponent } from './contact/contact.component';
import { ColleguesComponent } from './collegues/collegues.component';

@Component({
  selector: 'app-webpage',
  standalone: true,
  imports: [StartComponent, AboutMeComponent, SkillSetComponent, MyWorkComponent, ColleguesComponent, ContactComponent],
  templateUrl: './webpage.component.html',
  styleUrl: './webpage.component.scss'
})
export class WebpageComponent {

}
