import { StatusCompra, TipoCompra } from "../enums/tipo-compra.enum";

export interface Transacoes {
    idTransacao: number;
    nomeTransacao: string;
    tipoCompra: string;
    status: string;
    formaPagamento:string;
    valor: number;
}