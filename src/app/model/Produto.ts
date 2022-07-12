import { Categoria } from "./Categoria"
import { Usuario } from "./Usuario"

export class Produto {
    
    public id: number
    public nomeProd: string
    public descricao: string
    public preco: number
    public foto: string

    public categoria: Categoria
    public usuario: Usuario
}