import { Atividade } from "./Atividade";

export interface SolicitacaoDeAtividade {
    id: number,
    datahoraConclusao: string,
    datahoraSolicitacao: string,
    situacao: string,
    atividades: Atividade[]
    nomeAluno: String,
}



