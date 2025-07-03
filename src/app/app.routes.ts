import { Routes } from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component'; // adjust path if needed
import { GoogleSigninComponentComponent } from './google-signin-component/google-signin-component.component';




export const routes: Routes = [
    {path: '', component: GoogleSigninComponentComponent},
    { path: 'welcome', component: WelcomeComponent}
];
