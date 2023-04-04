import { useContext } from "react";
import { PaginationStyle } from "./style";
import { ProductsContext } from "../../context/productsContext";

export const Pagination = () => {
  const { setPage, page } = useContext(ProductsContext);

  return (
    <PaginationStyle>
      <button onClick={() => setPage(page - 1)} disabled={page == 0}>
        Página Anterior
      </button>
      <button onClick={() => setPage(page + 1)}>Próxima Página</button>
    </PaginationStyle>
  );
};
