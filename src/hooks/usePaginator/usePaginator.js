import { PaginatorContext } from 'contexts/PaginatorContext/PaginatorContext';
import { useContext } from 'react';

const usePaginator = () => useContext(PaginatorContext);

export default usePaginator;
