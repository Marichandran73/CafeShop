import { inject } from '@angular/core';
import { CanActivateFn, Router, UrlTree } from '@angular/router';

export const authGuard: CanActivateFn = (route, state): boolean | UrlTree => {
  const router = inject(Router);

  if (typeof window === 'undefined') {
    return router.parseUrl('/login');
  }

  const role = localStorage.getItem('role');

  if (role === 'admin') {
    return true; 
  } else {
    return router.parseUrl('/login'); 
  }
};
