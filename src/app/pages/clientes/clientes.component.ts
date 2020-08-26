import { Component, OnInit } from '@angular/core';
import { CClientes } from 'src/app/classes/cClientes/cclientes';
import { BsModalService } from 'ngx-bootstrap/modal'
import { ClienteModalComponent } from 'src/app/modals/cliente-modal/cliente-modal.component';
import { Subscription } from 'rxjs' 

@Component({ 
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {


  public lst: CClientes[];
  public subscriptions: Subscription[];

  constructor(private modalService: BsModalService) { 
    this.lst=[];
    this.subscriptions = [];
  }


  ngOnInit(): void {
    // this.llenar_lista(); 
  }

private llenar_lista(){
  for(let i=1;i<=5;i++){
    var clientes=new CClientes();
    clientes.ide="1010" +i.toString();
    clientes.nom="Cliente" + i;
    clientes.sal=1000000 + 1 * 100000;
    clientes.fecha=new Date(new Date().setDate(i)); 
    this.lst.push(clientes);
  }
}

public openModal() {
  this.modalService.show(ClienteModalComponent, { keyboard: false, ignoreBackdropClick: true });
  this.subscriptions.push(
    this.modalService.onHidden.subscribe((reason: any) => {
      if (reason[0] === "cliente") {
        var result: any = reason[1];
        this.lst.push(result as CClientes);
        this.unsubscribe();
      }
    })
  );
}

public openEditModal(cliente: CClientes) {
  const initialState = {
    cliente: cliente
  }
  this.modalService.show(ClienteModalComponent, { initialState, keyboard: false, ignoreBackdropClick: true });
  this.subscriptions.push(
    this.modalService.onHidden.subscribe((reason: any) => {
      if (reason[0] === "cliente") {
        this.lst.forEach((x, i) => {
          if (x.ide === cliente.ide) {
            this.lst.splice(i, 1);
          }
        });

        var result: any = reason[1];
        this.lst.push(result as CClientes);
        this.unsubscribe();
      }
    })
  );
}

public delete(cliente: CClientes) {
  this.lst.forEach((x, i) => {
    if (x.ide === cliente.ide) {
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
