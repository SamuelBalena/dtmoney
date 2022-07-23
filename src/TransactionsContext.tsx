import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "./services/api";

interface Trasnaction {
    id: number,
    title: string,
    amount: number,
    type: string,
    category: string,
    createdAt: string,
}

type TransactionInput = Omit<Trasnaction, 'id' | 'createdAt'> // clona a interface de acima sem os valores id e createdAt

interface TransactionsProviderProps {
    children: ReactNode
}

interface TransactionsContextData {
    transactions: Trasnaction[]
    createTransaction: ( transaction: TransactionInput ) => void
}

export const TransactionsContext = createContext<TransactionsContextData>(
    {}  as TransactionsContextData
)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
    const [ transactions, setTransactions ] = useState<Trasnaction[]>([])

    useEffect(()=>{
        api.get('transactions')
            .then(response => setTransactions(response.data.transactions))
    },[])

    function createTransaction(transaction: TransactionInput) {
        api.post('/transactions', transaction)
    }

    return (
        <TransactionsContext.Provider value={{ transactions, createTransaction }}>
            { children }
        </TransactionsContext.Provider>
    )
}