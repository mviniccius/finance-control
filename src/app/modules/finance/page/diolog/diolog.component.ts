import { TransacaoPayload } from './../../../../models/interface/balance';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { tipoTransacao } from 'src/app/models/enum/tiposervico';

@Component({
  selector: 'app-diolog',
  templateUrl: './diolog.component.html',
  styleUrls: ['./diolog.component.scss'],
})
export class DiologComponent {
  @Output() transacoEnvio = new EventEmitter<TransacaoPayload>();

  envioDados: TransacaoPayload  //declaracao da interface que vai enviar os dados

  formTransacao: FormGroup = this.formBuild.group({
      descricao:['', Validators.required],
      preco:['',Validators.required],
      categoria:['',Validators.required],
      tipoTransacao:['',Validators.required]
  });

  tipoTransacao = tipoTransacao;

  constructor(public dialogRef: MatDialogRef<DiologComponent>, private formBuild: FormBuilder) {}

  //criar funcao para selecionar o tipo de transacao por botoes
  submitDataTipoTransacao(tipoTransacao: string){
    this.envioDados.tipoTransacao = tipoTransacao;
    this.dialogRef.close(this.envioDados)
  }

  cancel(): void {
    this.dialogRef.close();
  }

}
