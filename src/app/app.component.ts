import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GoogleSigninComponent } from './google-signin.component'; // adjust path if needed
import { loadGapiInsideDOM } from 'gapi-script';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GoogleSigninComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mantra';
}
