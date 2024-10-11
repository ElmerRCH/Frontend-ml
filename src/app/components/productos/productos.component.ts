import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  productos:any = {};

  constructor(private activatedRoute:ActivatedRoute,
        private productosService:ProductosService
  ){

    this.activatedRoute.params.subscribe(params => {
      this.productosService.getProductos(params['marca']).subscribe(
        (response) => {
          this.productos = response;
          console.log('Productos recibidos:::::::::::', this.productos);
        },
        (error) => {
          console.error('Error al obtener productos:', error);
        }
      );
    });

}
}
