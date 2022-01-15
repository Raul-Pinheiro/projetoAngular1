import { Transferencia } from './../model/transferencia.model';
import { TransferenciaService } from './../services/transferencia.service';
import { Component, EventEmitter, Output } from "@angular/core";
import { Router } from '@angular/router';

@Component({
    selector:"app-nova-transferencia",
    templateUrl:"./nova-transferencia.component.html",
    styleUrls:["./nova-transferencia.component.scss"]
})

export class NovaTransferenciaComponent{
  @Output() aoTransferir = new EventEmitter<any>();
  valor: number;
  destino:number;
  constructor(private service: TransferenciaService, private router: Router){}
  transferir(){
    console.log('Nova transferência executada.')
    const dadosTransf:Transferencia = {valor:this.valor,destino:this.destino}
    //this.aoTransferir.emit(dadosTransf);
    this.service.adicionar(dadosTransf).subscribe(
      resultado =>{
        this.limparCampos();
        this.router.navigateByUrl('extrato')
      },
      error => console.log(error)
    )

    //this.limparCampos();
  }

  limparCampos():void{
    this.valor = 0;
    this.destino = 0;
  }
}
