import { StatusCompra, TipoCompra } from "../enums/tipo-compra.enum";

export interface Transacoes {
    idTransacao: number;
    nomeCompra: string;
    tipoCompra: TipoCompra;
    status: StatusCompra;
    valor: number;
}