import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/shared/nav-bar/nav-bar.component';
import { MarcasComponent } from './components/marcas/marcas.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductosComponent } from './components/productos/productos.component';
import { LoadingIndicatorComponent } from './components/shared/loading-indicator/loading-indicator.component';
import { SellerSelectorComponent } from './components/seller-selector/seller-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MarcasComponent,
    ProductosComponent,
    LoadingIndicatorComponent,
    SellerSelectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
