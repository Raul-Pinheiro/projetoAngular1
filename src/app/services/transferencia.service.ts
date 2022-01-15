import { Transferencia } from './../model/transferencia.model';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
  private listaTransferencias:any[];
  private url = "http://localhost:3000/transferencias"
  constructor(private httpClient: HttpClient) {
    this.listaTransferencias = []
  }

  get transferencias(): any[]{
    return this.listaTransferencias
  }

  todasTransferencias(): Observable<Transferencia[]>{
    return this.httpClient.get<Transferencia[]>(this.url)
  }
  adicionar(transferencia:Transferencia): Observable <Transferencia> {
    this.hidratar(transferencia);
    //this.listaTransferencias.push(transferencia);
    return this.httpClient.post<Transferencia>(this.url,transferencia)
  }

  private hidratar(transferencia:any){
    transferencia.data = new Date();

  }
}
