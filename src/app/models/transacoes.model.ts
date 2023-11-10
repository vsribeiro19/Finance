import { StatusCompra, TipoCompra } from "../enums/tipo-compra.enum";

export interface transacoes {
    idTransacao: number;
    compra: string;
    tipoCompra: TipoCompra;
    status: StatusCompra;
    valor: number;
}