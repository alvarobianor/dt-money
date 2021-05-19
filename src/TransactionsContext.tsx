import { createContext, useEffect, useState, ReactNode } from "react";
import { api } from "./services/api";

interface TransactionsProps {
  id: string;
  category: string;
  title: string;
  createdAt: string;
  type: string;
  value: number;
}

interface TransactionproviderProps {
  children: ReactNode;
}

export const TransactionContext = createContext<TransactionsProps[]>([]);

export function Transactionprovider({ children }: TransactionproviderProps) {
  const [transactions, setTransactions] = useState<TransactionsProps[]>([]);

  useEffect(() => {
    api
      .get("/transactions")
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  return (
    <TransactionContext.Provider value={transactions}>
      {children}
    </TransactionContext.Provider>
  );
}
