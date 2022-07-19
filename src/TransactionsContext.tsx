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

interface TransactionsProviderProps {
    children: ReactNode
}

export const TransactionsContext = createContext<Trasnaction[]>([])

export function TransactionsProvider({ children }: TransactionsProviderProps) {
    const [ transactions, setTransactions ] = useState<Trasnaction[]>([])

    useEffect(()=>{
        api.get('transactions')
            .then(response => setTransactions(response.data.transactions))
    },[])

    return (
        <TransactionsContext.Provider value={transactions}>
            { children }
        </TransactionsContext.Provider>
    )
}