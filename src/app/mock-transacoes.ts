
import { StatusCompra, TipoCompra } from "./enums/tipo-compra.enum";
import { Transacoes } from "./models/transacoes.model";

export const DADOS: Transacoes[] = [
    {
        idTransacao: 1,
        nomeCompra: 'Plano Claro',
        tipoCompra: TipoCompra.debito,
        status: StatusCompra.pendente,
        valor: 39.90
    },
    {
        idTransacao: 2,
        nomeCompra: 'Plano Claro',
        tipoCompra: TipoCompra.credito,
        status: StatusCompra.pendente,
        valor: 52.59
    },
    {
        idTransacao: 3,
        nomeCompra: 'Plano Claro',
        tipoCompra: TipoCompra.credito,
        status: StatusCompra.pago,
        valor: 150.42
    }
]