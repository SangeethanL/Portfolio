import { Routes } from '@angular/router';
import { WebpageComponent } from './webpage/webpage.component';
import { ImprintComponent } from './imprint/imprint.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: WebpageComponent },
    { path: 'privacyPolicy', component: PrivacyPolicyComponent },
    { path: 'imprint', component: ImprintComponent }
];