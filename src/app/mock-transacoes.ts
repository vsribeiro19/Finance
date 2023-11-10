
import { StatusCompra, TipoCompra } from "./enums/tipo-compra.enum";
import { transacoes } from "./models/transacoes.model";

export const DADOS: transacoes[] = [
    {
        idTransacao: 1,
        compra: 'Plano Claro',
        tipoCompra: TipoCompra.debito,
        status: StatusCompra.pendente,
        valor: 39.90
    },
    {
        idTransacao: 2,
        compra: 'Plano Claro',
        tipoCompra: TipoCompra.credito,
        status: StatusCompra.pendente,
        valor: 52.59
    },
    {
        idTransacao: 3,
        compra: 'Plano Claro',
        tipoCompra: TipoCompra.credito,
        status: StatusCompra.pago,
        valor: 150.42
    }
]