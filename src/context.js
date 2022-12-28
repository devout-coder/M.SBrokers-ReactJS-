import { createContext } from "react";
export const MyStockContext = createContext()
export const StockContextProvider = MyStockContext.Provider;
export const StockContextConsumer = MyStockContext.Consumer;
export const MyNewsContext = createContext()
export const NewsContextProvider = MyStockContext.Provider;
export const NewsContextConsumer = MyStockContext.Consumer;