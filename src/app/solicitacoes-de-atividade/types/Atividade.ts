import { TipoDeAtividade } from "src/app/types/TipoDeAtividade";

export interface Atividade {
    id: number,
    horasTotais: number,
    horasValidas?: number,
    tipoDeAtividade: TipoDeAtividade,
    file?: string,
    fileName?: string,
    situacao: string,
    urlDocumento?: string
}