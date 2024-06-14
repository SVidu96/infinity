import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

//TODO : can be refactored as CanDeactivateFn
export const loggedinGuard: CanActivateFn = async (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const isValidUser = await authService.isUserValid();

  if (isValidUser) {
    router.navigate(['/tabs']);
  }
  
  return true;
};

