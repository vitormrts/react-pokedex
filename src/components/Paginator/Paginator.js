import { POKEMONS_PER_PAGE, TOTAL_POKEMONS } from 'base/constants';
import { usePokemons } from 'hooks';
import usePaginator from 'hooks/usePaginator';
import { useEffect, useState } from 'react';
import * as S from './Paginator.styles';

const Paginator = () => {
  const { pokemons } = usePokemons();
  const { currentPage, setCurrentPage } = usePaginator();
  const [totalPages, setTotalPages] = useState(Math.ceil(TOTAL_POKEMONS / POKEMONS_PER_PAGE));

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePreviousPage = () => {
    if (currentPage === 1) {
      return;
    }
    handlePageChange(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage === totalPages) {
      return;
    }
    handlePageChange(currentPage + 1);
  };

  const pageMap = [...Array(totalPages).keys()].map((index) => {
    const page = index + 1;
    return (
      <S.Page key={page} onClick={() => handlePageChange(page)} selected={page === currentPage}>
        {page}
      </S.Page>
    );
  });

  useEffect(() => {
    setTotalPages(Math.ceil(pokemons.length / POKEMONS_PER_PAGE));
  }, [pokemons]);

  return (
    <S.Paginator>
      <S.Button onClick={handlePreviousPage} disabled={currentPage === 1}>
        Anterior
      </S.Button>
      <S.Pages>{pageMap}</S.Pages>
      <S.Button onClick={handleNextPage} disabled={currentPage === totalPages}>
        Próxima
      </S.Button>
    </S.Paginator>
  );
};

export default Paginator;
