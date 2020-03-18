export interface User {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

//resposta dos usuarios
export interface ResponseUsers {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: User[];
}

//resposta de apenas um usuario
export interface ResponseUser {
    data: User;
}

//modelo para o cadastro
export interface ResponseCadastro {
    name: string;
    job: string;
    id: string;
    createdAt: Date;
}

//resposta do cadastro
export interface RequestCadastro {
    name: string;
    job: string;
}

//modelo para o update
export interface  RequestUpdate{
    name: string;
    job: string;
}

export interface ResponseUpdate {
    name: string;
    job: string;
    updatedAt: string;
}