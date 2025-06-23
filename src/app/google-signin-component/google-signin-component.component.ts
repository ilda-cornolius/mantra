import { Component } from '@angular/core';

@Component({
  selector: 'app-google-signin-component',
  standalone: true,
  imports: [],
  templateUrl: './google-signin-component.component.html',
  styleUrl: './google-signin-component.component.scss'
})
export class GoogleSigninComponentComponent {
  isLoggedIn = false;
  title = 'mantra';
}
