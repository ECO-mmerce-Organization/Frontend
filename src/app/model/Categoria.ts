import { Produto } from "./produto"

export class Categoria {
    public id: number
    public nomeCat: string
    public tipo: string

    public produto: Produto[]
}