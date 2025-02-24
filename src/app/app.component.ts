import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaquetacionBEMComponent } from "./components/maquetacion-bem/maquetacion-bem.component";
import { AccesibilidadComponent } from "./components/accesibilidad/accesibilidad.component";
import { LibDropdownComponent } from "./components/lib-dropdown/lib-dropdown.component";
import { CommonModule } from '@angular/common';
import { ProductListComponentComponent } from "./components/product-list-component/product-list-component.component";
import { ProductAddComponentComponent } from "./components/product-add-component/product-add-component.component";

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    RouterOutlet, 
    MaquetacionBEMComponent, 
    AccesibilidadComponent, 
    LibDropdownComponent, 
    ProductListComponentComponent, 
    ProductAddComponentComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dpto.Componete';
}
