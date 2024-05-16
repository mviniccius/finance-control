import { balanceDatas } from './../../../../models/interface/balance';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table-information',
  templateUrl: './table-information.component.html',
  styleUrls: ['./table-information.component.scss']
})
export class TableInformationComponent {

  @Input() balanceInput: balanceDatas

}
