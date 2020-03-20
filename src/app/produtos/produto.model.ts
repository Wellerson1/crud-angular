export interface Produto {
    name: String,
    descricao: String,
    categoria: String
}

export interface ResponseProduto{
    data: Produto
}
export interface ResponseProdutos{
    data: Produto[]
}