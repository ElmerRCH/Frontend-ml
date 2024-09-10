import { Component, inject, OnInit, OnDestroy,ApplicationRef,ChangeDetectorRef   } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { interval,Subject,filter,concatMap  } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
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
    // Usar `concatMap` para iniciar el intervalo solo cuando la aplicación esté estable
    this.appRef.isStable.pipe(
      filter(stable => stable),
      takeUntil(this.destroy$),
      concatMap(() => interval(15000))
    ).subscribe(() => {
      // Realizar la petición al servicio
      this.productosService.getProductosArribaPrecio().subscribe(data => {
        this.productos = data
        this.dataProducts = true
        this.cdr.detectChanges();
        console.log('datos:', data);

      });
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
