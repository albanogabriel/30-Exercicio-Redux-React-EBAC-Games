import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { ProdutoType } from '../../App'

type CarrinhoState = {
  itens: ProdutoType[]
}

const initialState: CarrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<ProdutoType>) => {
      const produto = action.payload

      if (state.itens.find((ProdutoType) => ProdutoType.id === produto.id)) {
        alert('Produto já adicionado ao carrinho')
      } else {
        state.itens.push(produto)
      }
    },
    favoritar: (state, action: PayloadAction<ProdutoType>) => {
      const favorito = action.payload

      if (state.itens.filter((ProdutoType) => ProdutoType.id !== favorito.id)) {
        alert('Produto já favoritado')
      } else {
        state.itens.push(favorito)
      }
    }
  }
})

export default carrinhoSlice.reducer
export const { adicionar, favoritar } = carrinhoSlice.actions
