import { Routes } from '@angular/router';
import { WebpageComponent } from './webpage/webpage.component';
import { ImprintComponent } from './imprint/imprint.component';

export const routes: Routes = [
    { path: '', component: WebpageComponent, },
    { path: 'imprint', component: ImprintComponent }
];
