import { Injectable, Injector } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoaderService } from '../../shared/services/loader.service';

@Injectable()
export class HttpLoaderInterceptor implements HttpInterceptor {
  constructor(private injector: Injector) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const loaderService = this.injector.get(LoaderService);
    loaderService.show();

    return next.handle(req).pipe(
      finalize(() => {
        loaderService.hide();
      })
    );
  }
}
