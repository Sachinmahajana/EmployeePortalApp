
import { CanActivateFn,Router } from '@angular/router';
import { AuthService } from './auth';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const auth=inject(AuthService);
  const router=inject(Router);

  if(auth.isLoggedIn()){
    return true;
  }else{
    return router.parseUrl('/login');
  }
};


