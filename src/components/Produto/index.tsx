import { useDispatch } from "react-redux";
import { Produto as ProdutoType } from "../../App";
import * as S from "./styles";
import { adicionar, remover } from "../../store/reducers/favoritar";
import { paraReal } from "../ParaReal/ParaReal";

type Props = {
  produto: ProdutoType;
  favoritar: ProdutoType;
  estaNosFavoritos: boolean;
};

const ProdutoComponent = ({ produto, favoritar, estaNosFavoritos }: Props) => {
  const dispatch = useDispatch();

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>
      <S.BtnComprar
        onClick={() =>
          dispatch(estaNosFavoritos ? remover(favoritar) : adicionar(favoritar))
        }
        type="button"
      >
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
