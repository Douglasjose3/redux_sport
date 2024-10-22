import { configureStore } from "@reduxjs/toolkit";
import carrinhoReducer from "./reducers/carrinho";
import favoritarReducer from "./reducers/favoritar";
import api from "../services/api";

export const store = configureStore({
  reducer: {
    //RooterReduce
    favoritar: favoritarReducer,
    carrinho: carrinhoReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootReducer = ReturnType<typeof store.getState>; //infêrencia de tipo //ele vai saber qual o tipo apropriado
