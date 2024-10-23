import { useSelector } from 'react-redux'
import { RootReducer } from '../../store/indexStore'
import { paraReal } from '../ParaReal/ParaReal'
import * as S from './styles'

import cesta from '../../assets/cesta.png'

const Header = () => {
  const itens = useSelector((state: RootReducer) => state.carrinho.itens)
  //state do reducer //carrinho: queremos os itens //precisa configurar TS para trabalhar com o Redux
  //: RooterReduce é a tipagem
  const favoritos = useSelector((state: RootReducer) => state.favoritar.itens)
  const valorTotal = itens.reduce((acc, item) => {
    acc += item.preco
    return acc
  }, 0)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>
          {favoritos.length} favoritos</span>
          <img src={cesta} />
        <span>
          {itens.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
