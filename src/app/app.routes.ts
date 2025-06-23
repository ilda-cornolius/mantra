import { Routes } from '@angular/router';
import {GoogleSigninComponent} from './google-signin.component'; // adjust path if needed   
import {WelcomeComponent} from './welcome/welcome.component'; // adjust path if needed




export const routes: Routes = [
    {path: '', component: GoogleSigninComponent},
    { path: 'welcome', component: WelcomeComponent}
];
