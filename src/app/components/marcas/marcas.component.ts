import { Component, inject, OnInit, OnDestroy,ApplicationRef,ChangeDetectorRef   } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { interval,Subject,filter,concatMap  } from 'rxjs';
import { takeUntil,switchMap,startWith } from 'rxjs/operators';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-marcas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './marcas.component.html',
  styleUrl: './marcas.component.css'
})

export class MarcasComponent implements OnInit, OnDestroy{
  private productosService = inject(ProductosService)
  productos: any;
  dataProducts = false

  constructor(private appRef: ApplicationRef,
              private cdr: ChangeDetectorRef
  ) { }

  private destroy$ = new Subject<void>();

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

  ngAfterViewInit(): void {
    
  }
  chooseLogo(marca:any){

    return `assets/img/${marca.toLowerCase()}.png`;
  }
}
