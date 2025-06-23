declare const google: any;

import { Component, OnInit, NgZone } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-google-signin',
  standalone: true,
  template: `<div id="g-signin-button"></div>`,
  styles: []
})
export class GoogleSigninComponent implements OnInit {
 
 constructor(private router: Router, private ngZone: NgZone){}

  // This method is called when the user successfully signs in
  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      (window as any).handleCredentialResponse = (response: any) => {
        console.log('✅ ID token:', response.credential);
        alert('Signed in!');

        this.ngZone.run(() => {
          this.router.navigate(['./welcome']);
        })
      };

      // Delay ensures script is ready
      setTimeout(() => {
        google.accounts.id.initialize({
          client_id: '976001253876-v30o56gog54vf8fcve43duj1gnkghs25.apps.googleusercontent.com',
          callback: (window as any).handleCredentialResponse
        });

        google.accounts.id.renderButton(
          document.getElementById("g-signin-button"),
          { theme: "outline", size: "large" }
        );

        // google.accounts.id.prompt(); // optional: auto login
      }, 200);
    }
  }
}
