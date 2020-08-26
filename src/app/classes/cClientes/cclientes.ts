import { ClientesComponent } from 'src/app/pages/clientes/clientes.component';

export class CClientes{
    public ide: string;
    public nom: string;
    public sal: number;
    public fecha: Date;

    constructor(){
        this.ide="";
        this.nom="";
        this.sal=0; 
        this.fecha=new Date();
    }
}

