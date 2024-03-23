import { Actions, createEffect, ofType } from '@ngrx/effects';

import * as AuthActions from '../store/auth.actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../env/environment';
import { Injectable } from '@angular/core';

export interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}
@Injectable()
export class AuthEffects {
  authLogin = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.LOGIN_START),
      switchMap((authData: AuthActions.LoginStart) => {
        return this.http
          .post<AuthResponseData>(
            `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.API_KEY}`,
            {
              email: authData.payload.email,
              password: authData.payload.password,
              returnSecureToken: true,
            }
          )
          .pipe(
            map((resData) => {
                const expirationDate = new Date(new Date().getTime() + +resData.expiresIn * 1000);

                return of(new AuthActions.Login({
                    email: resData.email,
                    userId: resData.localId,
                    token: resData.idToken,
                    expiresIn: expirationDate
              }));
            }),
            catchError((error) => {
                return of();
              })
          );
      })
    )
    }, { dispatch: false});

  constructor(private actions$: Actions, private http: HttpClient) {}
}
