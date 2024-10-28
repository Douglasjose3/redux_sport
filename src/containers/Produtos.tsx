import { Produto as ProdutoType } from "../App";
import Produto from "../components/Produto";
import { useGetProdutosQuery } from "../services/api";
import * as S from "./styles";

type Props = {
  favoritos: ProdutoType[];
  estaNosFavoritos: boolean;
  favoritar: (produto: ProdutoType) => void;
};

const ProdutosContainer = ({ favoritos, favoritar }: Props) => {
  const { data: produtos, isLoading } = useGetProdutosQuery();

  if (isLoading) return <h2>Carregando...</h2>;
  if (!produtos || produtos.length === 0)
    return <h2>Nenhum produto disponível</h2>;

  // Otimização: transformando favoritos em um Set para melhor desempenho
  const favoritosIds = new Set(favoritos.map((f) => f.id));

  const produtoEstaNosFavoritos = (produto: ProdutoType) => {
    return favoritosIds.has(produto.id);
  };

  return (
    <S.Produtos>
      {produtos.map((produto) => (
        <Produto
          estaNosFavoritos={produtoEstaNosFavoritos(produto)}
          key={produto.id}
          produto={produto}
          favoritar={favoritar}
        />
      ))}
    </S.Produtos>
  );
};

export default ProdutosContainer;
