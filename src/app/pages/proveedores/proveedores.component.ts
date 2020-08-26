import { Component, OnInit } from '@angular/core';
import { CProveedor } from 'src/app/classes/cProveedor/cproveedor';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ProveedorModalComponent } from 'src/app/modals/proveedor-modal/proveedor-modal.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.scss']
})
export class ProveedoresComponent implements OnInit {
   
  public lst: CProveedor[];
  public subscriptions: Subscription[];
  
  constructor(private modalService: BsModalService) {
    this.lst=[];
    this.subscriptions = [];
   }

  ngOnInit(): void {
    // this.llenarLista();
  }

  private llenarLista(){
    for (let i=1;i<=10;i++){
       var proveedor=new CProveedor; 
       proveedor.idep=(i * 1000).toString() + "00";
       proveedor.nomp="proveedor" + i;
       proveedor.cupo=1000000 + i * 20000;
       this.lst.push(proveedor);
    }
  }

  public openModal() {
    this.modalService.show(ProveedorModalComponent, { keyboard: false, ignoreBackdropClick: true });
    this.subscriptions.push(
      this.modalService.onHidden.subscribe((reason: any) => {
        if (reason[0] === "proveedor") {
          var result: any = reason[1];
          this.lst.push(result as CProveedor);
          this.unsubscribe();
        }
      })
    );
  }

  public openEditModal(proveedor: CProveedor) {
    const initialState = {
      proveedor:proveedor
    }
    this.modalService.show(ProveedorModalComponent, { initialState, keyboard: false, ignoreBackdropClick: true });
    this.subscriptions.push(
      this.modalService.onHidden.subscribe((reason: any) => {
        if (reason[0] === "proveedor") {
          this.lst.forEach((x, i) => {
            if (x.idep === proveedor.idep) {
              this.lst.splice(i, 1);
            }
          });
  
          var result: any = reason[1];
          this.lst.push(result as CProveedor);
          this.unsubscribe();
        }
      })
    );
  }

  public delete(proveedor:CProveedor) {
    this.lst.forEach((x, i) => {
      if (x.idep === proveedor.idep) {
        this.lst.splice(i, 1);
      }
    });
  }
  
  public unsubscribe() {
    this.subscriptions.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
    this.subscriptions = [];
  }

}
