import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';

export const tokenMoviesInterceptor: HttpInterceptorFn = (req, next) => {
  const api_token = environment.api_token;
  if (api_token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${api_token}`,
      },
    });
  }
  return next(req);
};
