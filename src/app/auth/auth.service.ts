import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, tap, throwError } from 'rxjs';
import { User } from './user.model';
import { environment } from 'src/env/environment';
import { RecipeService } from '../recipes/recipes.service';

export interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  user = new BehaviorSubject<User>(null);
  tokenTimer: any;

  constructor(private http: HttpClient, private router: Router, private recipeService: RecipeService) {}

  signup(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.API_KEY}`,
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(
        catchError(this.errorHandler),
        tap((response) => {
          // tap into response data to create a user
          this.handleAuthentication(
            response.email,
            response.localId,
            response.idToken,
            +response.expiresIn
          );
        })
      );
  }

  login(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.API_KEY}`,
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(
        catchError(this.errorHandler),
        tap((response) => {
          // tap into response data to create a user
          this.handleAuthentication(
            response.email,
            response.localId,
            response.idToken,
            +response.expiresIn
          );
        })
      );
  }

  // logs out a user and clears user data from local storage
  // & clears array of recipes in recipe service
  logout() {
    this.user.next(null);
    this.router.navigate(['./auth']);
    localStorage.removeItem('userData');
    this.recipeService.setRecipes([]);

    if (this.tokenTimer) {
      clearTimeout(this.tokenTimer);
    }

    this.tokenTimer = null;
  }

  // creates a user, stores user in local storage and
  // begin timers for automatic logout when token life expires
  private handleAuthentication(
    email: string,
    userId: string,
    token: string,
    expiresIn: number
  ) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);

    let user = new User(email, userId, token, expirationDate);

    this.user.next(user);
    this.autoLogout(expiresIn * 1000)
    localStorage.setItem('userData', JSON.stringify(user));
  }

  // on inital load, this method checks for token in local storage
  // uses info to create a user and recalculates token life and starts timer
  autoLogin() {
    const localData: {
      email: string;
      id: string;
      _token: string;
      _tokenExpirationDate: string;
    } = JSON.parse(localStorage.getItem('userData'));

    if (!localData) {
      return;
    }

    const loadedUser = new User(
      localData.email,
      localData.id,
      localData._token,
      new Date(localData._tokenExpirationDate)
    );

    if (loadedUser.token) {
      this.user.next(loadedUser);

      const expirationTime = new Date(localData._tokenExpirationDate).getTime();
      const currentTime = new Date().getTime();

      // calculate remaining token life and begin autoLogout timer
      const remainingTime = new Date(expirationTime - currentTime).getTime();
      this.autoLogout(remainingTime);
    }
  }

  autoLogout(expirationTime: number) {
    this.tokenTimer = setTimeout(() => {
      this.logout();
    }, expirationTime);
  }

  private errorHandler(errorResponse: HttpErrorResponse) {
    let errorMessage = 'An unknown error occured.';
    if (!errorResponse.error || !errorResponse.error.error) {
      return throwError(() => new Error(errorMessage));
    }

    switch (errorResponse.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This email exists already.';
        break;
      case 'OPERATION_NOT_ALLOWED':
        errorMessage = 'Sign in has been disabled.';
        break;
      case 'TOO_MANY_ATTEMPTS_TRY_LATER':
        errorMessage = 'Too many attempts have been made. Try again later.';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'This email does not exist.';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'Invalid email/password.';
        break;
      case 'USER_DISABLED':
        errorMessage = 'Your account has been disabled.';
        break;
    }
    return throwError(() => new Error(errorMessage));
  }
}
