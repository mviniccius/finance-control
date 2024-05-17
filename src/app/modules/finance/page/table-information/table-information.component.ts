import { Transacao, balanceDatas } from './../../../../models/interface/balance';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-information',
  templateUrl: './table-information.component.html',
  styleUrls: ['./table-information.component.scss']
})
export class TableInformationComponent implements OnInit{

  @Input() balanceInputFilho: Transacao

  ngOnInit(): void {
    console.log("Informações do DumbComponent", this.balanceInputFilho.categoria);
  }
}
