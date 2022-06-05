import { useState } from 'react';
import * as S from './Paginator.styles';

const Paginator = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  return (
    <S.Paginator>
      <S.Button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
        Anterior
      </S.Button>
      <S.Page>{currentPage}</S.Page>
      <S.Button
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === totalPages}>
        Próxima
      </S.Button>
    </S.Paginator>
  );
};
