import {
  Component,
  OnDestroy,
  ViewChild
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AlertComponent } from '../shared/alert/alert.component';
import { PlaceholderDirective } from '../shared/placeholder/placeholder.directive';
import { AuthResponseData, AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export default class AuthComponent implements OnDestroy {
  isLoginMode = true;
  isLoading = false;
  @ViewChild(PlaceholderDirective, { static: false })
  alertHostContainer: PlaceholderDirective;

  closeSub: Subscription;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  submitForm(authForm: NgForm) {
    if (!authForm.valid) {
      return;
    }

    const email = authForm.value.email;
    const password = authForm.value.password;

    let authObservable: Observable<AuthResponseData>;

    this.isLoading = true;
    if (this.isLoginMode) {
      authObservable = this.authService.login(email, password);
    } else {
      authObservable = this.authService.signup(email, password);
    }

    authObservable.subscribe({
      next: (response: any) => {
        console.log(response);
        this.isLoading = false;
        this.router.navigate(['/recipes']);
      },
      error: (error: any) => {
        this.isLoading = false;
        this.showAlert(error.message);
      },
      complete() {},
    });

    authForm.reset();
  }

  // this is how to programmatically create a component using code.
  // could have easily done this alert pop up with a simple *ngIf directive.
  private showAlert(message: string) {

    // access the placeholder where your component is to be rendered
    const hostViewContainerRef = this.alertHostContainer.viewContainerRef;

    // clear content
    hostViewContainerRef.clear();

    // create a component
    const componentRef = hostViewContainerRef.createComponent<AlertComponent>(AlertComponent)


    componentRef.instance.message = message;
    this.closeSub = componentRef.instance.close.subscribe(() => {
      this.closeSub.unsubscribe();
      hostViewContainerRef.clear();
    });
  }

  ngOnDestroy(): void {
    if (this.closeSub) {
      this.closeSub.unsubscribe();
    }
  }
}
