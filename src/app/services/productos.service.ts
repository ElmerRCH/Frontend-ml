import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http'
import { Observable,of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }
  // apiUrl = 'http://localhost:8000/excel/productos-arriba-precio'
  apiUrl = 'http://localhost:8000/excel/'

  // constructor(private http: HttpClient) { }

  getProductosArribaPrecio(): Observable<any> {
    return this.http.get(`${this.apiUrl}productos-arriba-precio`).pipe(
      catchError((_: HttpErrorResponse) => {
        return of(false);
      })
    );
  }

  getProductos(marca:any): Observable<any>{
    return this.http.post(`${this.apiUrl}productos/`,{ marca: marca }).pipe(
      catchError((_: HttpErrorResponse) => {
        return of(false);
      })
    );
  }

  actualizarInventario(): Observable<any>{
    return this.http.get(`${this.apiUrl}actualizar-inventario/`).pipe(
      catchError((_: HttpErrorResponse) => {
        return of(false);
      })
    );
  }


}
