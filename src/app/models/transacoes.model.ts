import { StatusCompra, TipoCompra } from "../enums/tipo-compra.enum";

export interface transacoes {
    idTransacao: number;
    nomeCompra: string;
    tipoCompra: TipoCompra;
    status: StatusCompra;
    valor: number;
}