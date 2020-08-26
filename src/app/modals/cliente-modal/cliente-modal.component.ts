import { Component, OnInit,Input } from '@angular/core';
import { CClientes} from 'src/app/classes/cClientes/cclientes'
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-cliente-modal',
  templateUrl: './cliente-modal.component.html',
  styleUrls: ['./cliente-modal.component.scss']
})
export class ClienteModalComponent implements OnInit {
  public formCliente: FormGroup;
  @Input() cliente: CClientes;
  public isNew: boolean;
  public isSubmitted: boolean;


  constructor(public formBuilder: FormBuilder,
    private modalService: BsModalService,
    public bsModalRef: BsModalRef) { 
    
    this.isNew = false;
    this.isSubmitted = false;
    } 

  ngOnInit(): void {
    if (this.cliente === undefined) {
      this.cliente = new CClientes();
      this.isNew = true;
    }
    this.formCliente = this.formBuilder.group({
      ide: [this.cliente.ide, [Validators.required, Validators.maxLength(10)]],
      nom: [this.cliente.nom, [Validators.required, Validators.maxLength(40)]],
      sal: [this.cliente.sal, Validators.required]
    });
  }

  public submit() {
    this.isSubmitted = true;
    if (!this.formCliente.invalid) {
      let dataForm = this.formCliente.value;
      let cliente: CClientes = dataForm as CClientes;

      if (this.isNew) {
        cliente.fecha = new Date();
        this.addCliente(cliente);
      }
      else {
        cliente.fecha = this.cliente.fecha;
        this.editCliente(cliente);
      }
    }
  } 

  private addCliente(cliente: CClientes) {
    var diss: [string, any] = ["cliente", cliente]
    this.modalService.setDismissReason(diss as any);
    this.bsModalRef.hide();
    }
  
    private editCliente(cliente: CClientes) {
      var diss: [string, any] = ["cliente", cliente]
      this.modalService.setDismissReason(diss as any);
      this.bsModalRef.hide();
    }

    
  
}
