export interface balanceDatas {
  conta: Conta;
  transacoes: Transacao[];
}

export interface Conta {
  entrada: number;
  saida: number;
  total: number;
}

export interface Transacao {
  id: number;
  descricao: string;
  preco: number;
  categoria: string;
  tipoTransacao: string;
  dataTransacao: string;
}

export interface TransacaoPayload {
  descricao: string;
  preco: number;
  categoria: string;
  tipoTransacao: string;
}
