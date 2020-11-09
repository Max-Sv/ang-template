import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.includes('jsonplaceholder.typicode.com')) {
      const paramReq = req.clone({
        params: req.params.set(
          'userId',
          '7'
        )
      });
      return next.handle(paramReq);
    } else {
      return next.handle(req);
    }
    // console.log('req:', req);
    return next.handle(req);
  }
}

// intercept(
//   req: HttpRequest<any>,
//   next: HttpHandler
// ): Observable<HttpEvent<any>> {
//   const authReq = req.clone({
//     headers: req.headers.set('Session', '123456789'),
//   })

//   return next.handle(authReq).pipe(
//     tap(
//       (event) => {
//         if (event instanceof HttpResponse)
//           console.log('Server response')
//       },
//       (err) => {
//         if (err instanceof HttpErrorResponse) {
//           if (err.status == 401)
//             console.log('Unauthorized')
//         }
//       }
//     )
//   )
