export interface ResponseProdutos {
  data: Produtos[];
}

export interface Produtos {
  preco: number;
  cod_produto: number;
  categoria: number;
  nome: string;
  quantidade: number;
  descricao: string;
}
