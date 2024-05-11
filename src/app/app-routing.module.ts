import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinanceHomeComponent } from './modules/finance/page/finance-home/finance-home.component';

const routes: Routes = [ //declarando os componente para serem acessados pela URL
  {
    path:'',
    redirectTo:'finance',
    pathMatch:'full',
  },
  {
    path:'finance',
    component: FinanceHomeComponent,

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
