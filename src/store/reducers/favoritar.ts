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
        state.itens = state.itens.filter((p) => p.id !== produto.id);
      } else {
        state.itens.push(produto);
      }
    },
  },
});

export default favoritarSlice.reducer;
export const { adicionar } = favoritarSlice.actions;
