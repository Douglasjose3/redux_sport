import { configureStore } from "@reduxjs/toolkit";
import carrinhoReducer from "./reducers/carrinho";
import favoritarReducer from "./reducers/favoritar";
import api from "../services/api";

export const store = configureStore({
  reducer: {
    // RooterReduce
    favoritar: favoritarReducer,
    carrinho: carrinhoReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>; //RootState exportado para capturar o tipo retornado pelo estado da store, útil para tipagem em hooks como useSelector.
