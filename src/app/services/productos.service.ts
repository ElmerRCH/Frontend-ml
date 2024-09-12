import { inject, Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http'
import { Observable,of } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private http = inject(HttpClient)
  apiUrl = 'http://172.26.64.1:8000/excel/productos-arriba-precio'
  // constructor(private http: HttpClient) { }

  getProductosArribaPrecio(): Observable<any> {

    return this.http.get(this.apiUrl).pipe(
      catchError((_: HttpErrorResponse) => {
        return of(false);
      })
    );
  }

}
