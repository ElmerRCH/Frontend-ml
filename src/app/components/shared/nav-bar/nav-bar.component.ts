import { Component } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  isLoading = false;

  constructor(private productosService:ProductosService){}

  actualizarInventario() {
    this.isLoading = true; // Mostrar la pantalla de carga

    this.productosService.actualizarInventario().subscribe(
      (response) => {
        this.isLoading = false;
        console.log('Inventario actualizado:', response);
      },
      (error) => {
        this.isLoading = false;
        console.error('Error al actualizar inventario:', error);
      }
    );
  }
  selectorSeller(){
    alert('hola')
  }

}
