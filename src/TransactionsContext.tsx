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

type TransactionInput = Omit<TransactionsProps, "id" | "createdAt">;
interface TransactionProviderProps {
  children: ReactNode;
}

interface TransactionsData {
  transactions: TransactionsProps[];
  CreateTransaction: (transaction: TransactionInput) => void;
}

export const TransactionContext = createContext<TransactionsData>(
  {} as TransactionsData
);

// Usado na raiz dos componente no App, apenas!
export function Transactionprovider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<TransactionsProps[]>([]);

  useEffect(() => {
    api
      .get("/transactions")
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  const CreateTransaction = (transaction: TransactionInput) => {
    const response = api.post("/transactions", transaction);

    console.log(response);
  };

  return (
    <TransactionContext.Provider value={{ transactions, CreateTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
}
