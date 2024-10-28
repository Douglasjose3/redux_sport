import { useDispatch, useSelector } from "react-redux";
import { Produto as ProdutoType } from "../../App";
import * as S from "./styles";
import { paraReal } from "../ParaReal/ParaReal";
import { RootState } from "../../store/indexStore";
import { adicionar } from "../../store/reducers/carrinho";
import { favoritar } from "../../store/reducers/favoritar";

type Props = {
  produto: ProdutoType;
  favoritar: ProdutoType;
  estaNosFavoritos: boolean;
};

const ProdutoComponent = ({ produto }: Props) => {
  const dispatch = useDispatch();
  const favoritos = useSelector((state: RootState) => state.favoritar.itens);
  const estaNosFavoritos = favoritos.some((item) => item.id === produto.id);

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>
      <S.BtnComprar onClick={() => dispatch(favoritar(produto))} type="button">
        {estaNosFavoritos
          ? "- Remover dos favoritos"
          : "+ Adicionar aos favoritos"}
      </S.BtnComprar>
      <S.BtnComprar onClick={() => dispatch(adicionar(produto))} type="button">
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  );
};

export default ProdutoComponent;
