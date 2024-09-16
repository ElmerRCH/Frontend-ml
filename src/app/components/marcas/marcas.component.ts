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

  ngOnInit(): void {
    this.productosService.getProductosArribaPrecio().subscribe(
      (data) => {
        this.productos = data;
        console.log('data:::',this.productos)
      },
      (error) => {
        console.error('Error al obtener productos', error);
      }
    );
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  chooseLogo(marca:any){
    return `assets/img/${marca.toLowerCase()}.png`;
  }
}
