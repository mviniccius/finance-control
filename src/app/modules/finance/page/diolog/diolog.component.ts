import { FinaceService } from './../../services/finace.service';
import { tipoTransacao } from './../../../../models/enum/tiposervico';
import { TransacaoPayload } from './../../../../models/interface/balance';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';


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

  constructor(public dialogRef: MatDialogRef<DiologComponent>, private formBuild: FormBuilder, private finacePost: FinaceService) {}

  //criar funcao para selecionar o tipo de transacao por botoes
  setTipoTransacao(tipo: tipoTransacao){
    this.formTransacao.get('tipoTransacao')?.setValue(tipo);
    console.log('funcao set transacao', this.formTransacao.value)
  }

  salvar(): void{
    if(this.formTransacao.valid){
      this.finacePost.postData(this.formTransacao.value).subscribe({
        next: (res)=>{
          console.log('Dados enviados corretamente!', res);
          this.dialogRef.close();
        },
        error:(err)=>{
          console.error('Erro ao enviar dados', err);
        }
      })
    }
  }


  cancel(): void {
    this.dialogRef.close();
  }

}
