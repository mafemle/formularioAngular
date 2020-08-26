import { Component } from '@angular/core';
import { Toast,ToastrService, ToastPackage } from 'ngx-toastr';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  preserveWhitespaces: false
})

export class ToastComponent extends Toast {

  constructor(protected toastService: ToastrService,
    public toastPackage: ToastPackage) {
      super(toastService,toastPackage);
     }
   
 action(){
   this.toastPackage.triggerAction();
 }

}
