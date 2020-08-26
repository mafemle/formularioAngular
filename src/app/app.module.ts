import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { ProveedoresComponent } from './pages/proveedores/proveedores.component';
import { MenuComponent } from './component/menu/menu.component';
import { ToastComponent } from './component/toast/toast.component';
import { ToastrModule } from 'ngx-toastr';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ModalComponent } from './component/modal/modal.component';
import { ClienteModalComponent } from './modals/cliente-modal/cliente-modal.component';
import { ProveedorModalComponent } from './modals/proveedor-modal/proveedor-modal.component';
import { ProductoModalComponent } from './modals/producto-modal/producto-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    ProductosComponent,
    ProveedoresComponent,
    MenuComponent,
    ToastComponent,
    ModalComponent,
    ClienteModalComponent,
    ProveedorModalComponent,
    ProductoModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot({ toastComponent: ToastComponent}),
    ModalModule.forRoot(),
    ReactiveFormsModule,
    FormsModule
  ],
   
  entryComponents:[
    ToastComponent,ClienteModalComponent
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
