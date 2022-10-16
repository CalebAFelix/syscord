import { RegraDeAtividade } from "./RegraDeAtividade";

export interface TipoDeAtividade {
    id: number,
    nome: string,
    regraDeAtividade?: RegraDeAtividade
}