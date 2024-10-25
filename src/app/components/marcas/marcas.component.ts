import { Component,Input,Output,EventEmitter } from '@angular/core';
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
  showNotification = false;
  @Input() marca:any;

  private destroy$ = new Subject<void>();
  productos: any = [];

  @Output() marcaSeleccionada: EventEmitter<number>;
  constructor(private productosService: ProductosService) {
    this.marcaSeleccionada = new EventEmitter()

  }

  ngOnInit() {
    interval(150000).pipe(
      startWith(0),
      switchMap(() => this.productosService.getProductosArribaPrecio()),
      takeUntil(this.destroy$)
    ).subscribe(data => {
      // this.show()
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

  verProductos(){
    this.marcaSeleccionada.emit(this.marca)
  }


  show(duration = 3000) {

    this.showNotification = true;

    // Ocultar después del tiempo especificado
    setTimeout(() => {
      this.showNotification = false;
    }, duration);
  }
}
