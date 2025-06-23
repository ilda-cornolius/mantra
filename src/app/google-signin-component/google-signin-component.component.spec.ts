import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleSigninComponentComponent } from './google-signin-component.component';

describe('GoogleSigninComponentComponent', () => {
  let component: GoogleSigninComponentComponent;
  let fixture: ComponentFixture<GoogleSigninComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoogleSigninComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoogleSigninComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
