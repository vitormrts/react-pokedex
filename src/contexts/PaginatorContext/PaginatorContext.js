import { POKEMONS_PER_PAGE, TOTAL_POKEMONS } from 'base/constants';
import { createContext, useEffect, useMemo, useState } from 'react';

export const PaginatorContext = createContext();

const PaginatorContextProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(Math.ceil(TOTAL_POKEMONS / POKEMONS_PER_PAGE));
  const [initial, setInitial] = useState((currentPage - 1) * POKEMONS_PER_PAGE);
  const [final, setFinal] = useState(currentPage * POKEMONS_PER_PAGE);

  useEffect(() => {
    setInitial((currentPage - 1) * POKEMONS_PER_PAGE);
    setFinal(currentPage * POKEMONS_PER_PAGE);
  }, [currentPage]);

  const memoized = useMemo(
    () => ({
      currentPage,
      totalPages,
      initial,
      final,
      setCurrentPage,
      setTotalPages
    }),
    [currentPage, totalPages, initial, final, setCurrentPage, setTotalPages]
  );
  return <PaginatorContext.Provider value={memoized}>{children}</PaginatorContext.Provider>;
};

export default PaginatorContextProvider;
