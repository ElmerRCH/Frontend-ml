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
  isLoading = true;

  constructor(private activatedRoute:ActivatedRoute,
    private productosService:ProductosService
  ){

    this.activatedRoute.params.subscribe(params => {
      this.productosService.getProductos(params['marca']).subscribe(
        (response) => {

          // this.productos = response.data.filter((producto: any) => producto.Link_competencia_publicacion != "");
          this.productos = response;
          this.isLoading = false
          console.log('Productos recibidos:::::::::::', this.productos);
        },
        (error) => {
          console.error('Error al obtener productos:', error);
        }
      );
    });
  }

  formatCurrency(amount: number): string {
    const formattedAmount = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
    return formattedAmount.replace(/\s/g, '');
  }
}
