import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Produto } from "../../App";

type favoritarState = {
  itens: Produto[];
};

const initialState: favoritarState = {
  itens: [],
};

const favoritarSlice = createSlice({
  name: "favoritar", // Corrigido
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload;
      if (state.itens.find((p) => p.id === produto.id)) {
        alert("Item já adicionado");
      } else {
        state.itens.push(produto);
      }
    },
    // remover: (state, action: PayloadAction<Produto>) => {
    //     const favoriarId = action.payload.id;
    //     state.itens = state.itens.filter((p) => p.id !== favoriarId);
    // }
  },
});

export default favoritarSlice.reducer;
export const { adicionar } = favoritarSlice.actions;
