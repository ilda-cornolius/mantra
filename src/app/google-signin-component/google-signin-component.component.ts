

declare const google: any;

import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // 👈 Add this!

@Component({
  selector: 'g-signin-button',
  standalone: true,
  imports: [CommonModule], // 👈 Add this!
  templateUrl: './google-signin-component.component.html',
  styleUrl: './google-signin-component.component.scss'
})
export class GoogleSigninComponentComponent implements OnInit {
  title = 'mantra';
  isLoggedIn = false;

  constructor(private router: Router, private ngZone: NgZone) {}

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      (window as any).handleCredentialResponse = (response: any) => {
        console.log('✅ ID token:', response.credential);
        this.ngZone.run(() => {
          this.isLoggedIn = true;
          this.router.navigate(['/welcome']); // not './welcome'!
        });
      };

      setTimeout(() => {
        google.accounts.id.initialize({
          client_id: '976001253876-v30o56gog54vf8fcve43duj1gnkghs25.apps.googleusercontent.com',
          callback: (window as any).handleCredentialResponse
        });

        google.accounts.id.renderButton(
          document.getElementById('g-signin-button'),
          { theme: 'outline', size: 'large' }
        );
      }, 200);
    }
  }
}


