import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(public router: Router) { }
  
  public clientesPage(){
    this.router.navigate(['/clientes']);
  }

  public productosPage(){
    this.router.navigate(['/productos']);
  }

  public proveedorPage(){
    this.router.navigate(['/proveedor']);
  }




}

