import { createContext } from "react";

interface TransactionsProps {
  id: string;
  category: string;
  title: string;
  createdAt: string;
  type: string;
  value: number;
}

export const TransactionContext = createContext<TransactionsProps[]>([]);
