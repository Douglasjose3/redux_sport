import { useState } from 'react'
import Header from './components/Header'
import Produtos from './containers/Produtos'
import { Provider } from 'react-redux'
import { store } from './store/indexStore'

import { GlobalStyle } from './styles'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  const [favoritos, setFavoritos] = useState<Produto[]>([]) // Estado dos favoritos

  // Função para favoritar ou desfavoritar um produto
  const favoritar = (produto: Produto) => {
    if (favoritos.some(fav => fav.id === produto.id)) {
      // Remove o produto dos favoritos se ele já estiver na lista
      setFavoritos(favoritos.filter(fav => fav.id !== produto.id))
    } else {
      // Adiciona o produto aos favoritos
      setFavoritos([...favoritos, produto])
    }
  }

  return (
    <Provider store={store}>
      <GlobalStyle />
      <div className="container">
        <Header /> {/* itens do carrinho como uma propriedade */}
        <Produtos // Container, listagem de todos os produtos
          favoritos={favoritos}
          favoritar={favoritar}
        />
      </div>
    </Provider>
  )
}

export default App
