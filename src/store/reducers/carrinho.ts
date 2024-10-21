import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Produto } from "../../App" //dento do App.tsx

type CarrinhoState = { //lembrando que esse é o estado
    itens: Produto[] //tipagem dos itens
}

const initialState: CarrinhoState = { //precisa criar um objeto pro estado inicial
    itens: [] //valor do ESTADO INICIAL
}

const carrinhoSlice = createSlice({
    // configurações
    name: 'carrinho', //nome do slice/fatia
    initialState, //ESTADO INICIAL aponta para a "const initialState: CarrinhoState"
    reducers: { //cria toda mudança do estado
        adicionar: (state, action: PayloadAction<Produto>) => { //esse estado busca o initialState //<aqui tem que passar o vai estar no PayloadAction>
            const produto = action.payload; //armazena o PayloadAction<Produto> //objeto do produto
        
            if (state.itens.find((p) => p.id === produto.id)) { //precisa tipar os itens
                alert('Item já adicionado')
            } else {
                state.itens.push(produto)
            }
        }
    }
})

export default carrinhoSlice.reducer //exportar no index do store
export const { adicionar } = carrinhoSlice.actions