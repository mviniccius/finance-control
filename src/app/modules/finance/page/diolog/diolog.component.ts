import { TransacaoPayload } from './../../../../models/interface/balance';
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-diolog',
  templateUrl: './diolog.component.html',
  styleUrls: ['./diolog.component.scss'],
})
export class DiologComponent {

  envioDados: TransacaoPayload  //declaracao da interface que vai enviar os dados

  constructor(public dialogRef: MatDialogRef<DiologComponent>) {}

  //criar funcao para selecionar o tipo de transacao por botoes
  submitDataTipoTransacao(tipoTransacao: string){
    this.envioDados.tipoTransacao = tipoTransacao;
    this.dialogRef.close(this.envioDados)
  }

  cancel(): void {
    this.dialogRef.close();
  }

}
