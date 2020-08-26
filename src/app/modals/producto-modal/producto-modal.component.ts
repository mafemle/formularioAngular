import { Component, OnInit, Input } from '@angular/core';
import { CProducto} from 'src/app/classes/cProducto/cProducto';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-producto-modal',
  templateUrl: './producto-modal.component.html',
  styleUrls: ['./producto-modal.component.scss']
})
export class ProductoModalComponent implements OnInit {
  public formProducto: FormGroup;
  @Input() producto : CProducto;
  public isNew: boolean;
  public isSubmitted: boolean;

  constructor(public formBuilder: FormBuilder,
    private modalService: BsModalService,
    public bsModalRef: BsModalRef) { 
    
    this.isNew = false;
    this.isSubmitted = false;
    } 

    ngOnInit(): void {
      if (this.producto === undefined) {
        this.producto = new CProducto();
        this.isNew = true;
      }
      this.formProducto = this.formBuilder.group({
        codp: [this.producto.codp, [Validators.required, Validators.maxLength(10)]], 
        desp: [this.producto.desp, [Validators.required, Validators.maxLength(40)]],
        valp: [this.producto.valp, Validators.required]
      });
    }

    public submit() {
      this.isSubmitted = true;
      if (!this.formProducto.invalid) {
        let dataForm = this.formProducto.value;
        let producto: CProducto = dataForm as CProducto;
  
        if (this.isNew) {
          this.addproducto(producto);
        }
        else {

          this.editproducto(producto);
        }
      }
    }

    private addproducto(producto: CProducto) {
      var diss: [string, any] = ["producto", producto]
      this.modalService.setDismissReason(diss as any);
      this.bsModalRef.hide();
      }
    
      private editproducto(producto: CProducto) {
        var diss: [string, any] = ["producto", producto]
        this.modalService.setDismissReason(diss as any);
        this.bsModalRef.hide();
      }

}
