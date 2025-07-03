import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { loadGapiInsideDOM } from 'gapi-script';
import { CommonModule } from '@angular/common'; // 👈 Add this!

import { GoogleSigninComponentComponent } from './google-signin-component/google-signin-component.component'; // ✅ this one probably does
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet, GoogleSigninComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mantra';
}
