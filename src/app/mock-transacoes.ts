
import { StatusCompra, TipoCompra } from "./enums/tipo-compra.enum";
import { Transacoes } from "./models/transacoes.model";

export const DADOS: Transacoes[] = [
    {
        idTransacao: 1,
        nomeTransacao: 'Plano Claro',
        tipoCompra: 'Débito',
        status: 'Pendente',
        valor: 39.90
    },
    {
        idTransacao: 2,
        nomeTransacao: 'Plano Claro',
        tipoCompra: 'Débito',
        status: 'Pendente',
        valor: 52.59
    },
    {
        idTransacao: 3,
        nomeTransacao: 'Plano Claro',
        tipoCompra: 'Débito',
        status: 'Pendente',
        valor: 150.42
    }
]