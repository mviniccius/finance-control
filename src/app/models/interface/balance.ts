export interface balanceDatas {
  conta: Conta;
  transacao: Transacao[];
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
  dataTransacao: Date;
}

export interface TransacaoPayload {
  descricao: string;
  preco: number;
  categoria: string;
  tipoTransacao: string;
}
