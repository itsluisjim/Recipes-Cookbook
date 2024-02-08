import { inject } from '@angular/core';
import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { Observable, map, take } from 'rxjs';
import { AuthService } from './auth.service';
import * as fromApp from '../store/app.reducer';
import { Store } from '@ngrx/store';

/**
 * Protects paths from being accessible if authorization
 * is not established. Currenly only applied to /recipes
 */

export const AuthGuard: CanActivateFn = ():
  | boolean
  | UrlTree
  | Promise<boolean | UrlTree>
  | Observable<boolean | UrlTree> => {
  const store = inject(Store<fromApp.AppState>);
  const router = inject(Router);
  return store.select('auth').pipe(
    take(1),
    map(authState => {
      return authState.user
    }),
    map((user) => {
      const isAuth = !!user; // same as user ? true : false;
      if (isAuth) {
        return true;
      }
      return router.createUrlTree(['/auth']);
    })
  );
};
