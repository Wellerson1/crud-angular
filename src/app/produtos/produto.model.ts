export interface Produto {
    name: String,
    descricao: String,
    category: String,
}

export interface ResponseProduto {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: Produto[];
}