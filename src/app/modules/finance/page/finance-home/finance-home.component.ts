import { MatDialog } from '@angular/material/dialog';
import { Conta, TransacaoPost } from './../../../../models/interface/balance';
import { FinaceService } from './../../services/finace.service';
import { Component, OnInit } from '@angular/core';
import { DiologComponent } from '../diolog/diolog.component';

@Component({
  selector: 'app-finance-home',
  templateUrl: './finance-home.component.html',
  styleUrls: [],
})
export class FinanceHomeComponent implements OnInit {
  balanceInput: Conta;

  //declaracao os dados de entrada
  transactionDataPost: TransacaoPost[];

  constructor(private finaceService: FinaceService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.finaceService;
    this.getFinanceDatas();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DiologComponent, {
      width: '350px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  getFinanceDatas(): void {
    this.finaceService.getBalance().subscribe({
      next: (response) => {
        this.balanceInput = response;
        console.log(this.balanceInput);
      },
      error: (err) => console.log(err),
    });
  }

}
