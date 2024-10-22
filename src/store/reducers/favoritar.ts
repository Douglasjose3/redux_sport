import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Produto } from "../../App";

type FavoritarState = {
  itens: Produto[];
};

const initialState: FavoritarState = {
  itens: [],
};

const favoritarSlice = createSlice({
  name: "favoritar",
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload;

      if (state.itens.find((p) => p.id === produto.id)) {
        alert("Item já adicionado.");
      } else {
        state.itens.push(produto); // Adiciona o produto aos favoritos
      }
    },
    remover: (state, action: PayloadAction<number>) => {
      const produtoId = action.payload;
      const index = state.itens.findIndex((p) => p.id === produtoId);

      if (index !== -1) {
        state.itens.splice(index, 1); // Remove o produto
        alert("Item removido.");
      } else {
        alert("Item não encontrado nos favoritos.");
      }
    },
  },
});

export default favoritarSlice.reducer;
export const { adicionar, remover } = favoritarSlice.actions;
