import { balanceDatas } from './../../../../models/interface/balance';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-information',
  templateUrl: './table-information.component.html',
  styleUrls: ['./table-information.component.scss']
})
export class TableInformationComponent implements OnInit{

  @Input() balanceInputFilho: balanceDatas

  mostrarButton = true;

  quantidadeTransacao = 5;

  ngOnInit(): void {
    console.log("Informações do DumbComponent", this.balanceInputFilho.transacao);
  }

  mostrarMais(): void{
    this.quantidadeTransacao = this.balanceInputFilho.transacao.length;
    this.mostrarButton = !this.mostrarButton;
  }

  mostrarMenos(): void{
    this.quantidadeTransacao = 5;
    this.mostrarButton = !this.mostrarButton;
  }

}
