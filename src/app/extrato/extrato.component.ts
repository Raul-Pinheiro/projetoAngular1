import { Transferencia } from './../model/transferencia.model';
import { Component, Input, OnInit } from '@angular/core';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {
  transferencias:any[];
  constructor(private service: TransferenciaService) {

  }

  ngOnInit(): void {
    //this.transferencias = this.service.transferencias
    this.service.todasTransferencias().subscribe((transferencias:Transferencia[]) =>{
        this.transferencias = transferencias;
    })
  }

}
