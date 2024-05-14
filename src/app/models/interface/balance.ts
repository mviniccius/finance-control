export interface balanceDatas{
  conta: Conta,
  transacoes: Transacao[]
}

export interface Conta{
  conta:{
    entrada: number,
    saida: number,
    total: number,
  },
}

export interface Transacao{
  transacoes:[
    {
      id: number,
      descricao: string,
      preco: number,
      categoria: string,
      tipoTransacao: string,
      dataTransacao: string,
    }
  ]
}

export interface TransacaoPost{
  transacoes:[
    {
      descricao: string,
      preco: number,
      categoria: string,
      tipoTransacao: string,
    }
  ]
}
