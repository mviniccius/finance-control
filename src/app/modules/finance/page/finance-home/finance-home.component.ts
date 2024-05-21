import { MatDialog } from '@angular/material/dialog';
import { TransacaoPayload, balanceDatas } from './../../../../models/interface/balance';
import { FinaceService } from './../../services/finace.service';
import { Component, OnInit } from '@angular/core';
import { DiologComponent } from '../diolog/diolog.component';

@Component({
  selector: 'app-finance-home',
  templateUrl: './finance-home.component.html',
  styleUrls: [],
})
export class FinanceHomeComponent implements OnInit {

  //utilizado para receber todas as informações da API
  balanceInput: balanceDatas;


  //declaracao os dados de entrada
  transactionDataPost: TransacaoPayload;

  constructor(private finaceService: FinaceService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.finaceService;
    this.getFinanceDatas();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DiologComponent, {
      width: '350px',
    });

    dialogRef.afterClosed().subscribe((result: TransacaoPayload) => {
      if(result){
        console.log("Os dados vieram: ", result);
      }
      console.log('The dialog was closed', result);
    });
  }

  getFinanceDatas(): void {
    this.finaceService.getBalance().subscribe({
      next: (response) => {
        this.balanceInput = response;
        console.log('Meu GET',this.balanceInput);
      },
      error: (err) => console.log(err),
    });
  }

}
