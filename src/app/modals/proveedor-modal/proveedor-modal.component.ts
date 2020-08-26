import { Component, OnInit, Input } from '@angular/core';
import { CProveedor} from 'src/app/classes/cProveedor/cproveedor';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-proveedor-modal',
  templateUrl: './proveedor-modal.component.html',
  styleUrls: ['./proveedor-modal.component.scss']
})
export class ProveedorModalComponent implements OnInit {
  public formProveedor: FormGroup;
  @Input() proveedor: CProveedor;
  public isNew: boolean;
  public isSubmitted: boolean;

  constructor(public formBuilder: FormBuilder,
    private modalService: BsModalService,
    public bsModalRef: BsModalRef) { 
    
    this.isNew = false;
    this.isSubmitted = false;
    } 

    ngOnInit(): void {
      if (this.proveedor === undefined) {
        this.proveedor = new CProveedor();
        this.isNew = true;
      }
      this.formProveedor = this.formBuilder.group({
        idep: [this.proveedor.idep, [Validators.required, Validators.maxLength(10)]],
        nomp: [this.proveedor.nomp, [Validators.required, Validators.maxLength(40)]],
        cupo: [this.proveedor.cupo, Validators.required]
      });
    }

    public submit() {
      this.isSubmitted = true;
      if (!this.formProveedor.invalid) {
        let dataForm = this.formProveedor.value;
        let proveedor: CProveedor = dataForm as CProveedor;
  
        if (this.isNew) {
          this.addproveedor(proveedor);
        }
        else {
          this.editproveedor(proveedor);
        }
      }
    }

    private addproveedor(proveedor: CProveedor) {
      var diss: [string, any] = ["proveedor", proveedor]
      this.modalService.setDismissReason(diss as any);
      this.bsModalRef.hide(); 
      }
    
      private editproveedor(proveedor: CProveedor) {
        var diss: [string, any] = ["proveedor", proveedor]
        this.modalService.setDismissReason(diss as any);
        this.bsModalRef.hide();
      }

}
