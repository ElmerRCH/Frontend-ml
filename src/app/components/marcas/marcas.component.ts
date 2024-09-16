import { Component } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { interval,Subject,filter,concatMap  } from 'rxjs';
import { takeUntil,switchMap,startWith } from 'rxjs/operators';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styleUrls: ['./marcas.component.css']
})
export class MarcasComponent {


  private destroy$ = new Subject<void>();
  productos: any = [];

  constructor(private productosService: ProductosService) {}

  ngOnInit() {
    interval(15000).pipe(
      startWith(0),
      switchMap(() => this.productosService.getProductosArribaPrecio()),
      takeUntil(this.destroy$)
    ).subscribe(data => {
      this.productos = data;
    });

    //const reloadPage = () => {
    //  window.location.reload();
    //};

    // setTimeout(reloadPage, 15000);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  chooseLogo(marca:any){
    return `assets/img/${marca.toLowerCase()}.png`;
  }
}
