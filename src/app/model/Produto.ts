import { Categoria } from "./Categoria"

export class Produto {
    public id: number
    public nomeProd: string
    public descricao: string
    public preco: number
    public foto: string

    public categoria: Categoria

}