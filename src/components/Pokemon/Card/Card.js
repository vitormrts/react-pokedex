import { Types, PokemonModal } from 'components/Pokemon';
import { useState } from 'react';
import * as S from './Card.styles';

const Card = ({ content }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { id, name, image, types } = content;

  return (
    <>
      <S.Card onClick={() => setModalIsOpen(!modalIsOpen)}>
        <S.Image src={image} alt={name} />
        <S.Id>Nº{id}</S.Id>
        <S.Name>{name}</S.Name>
        <Types types={types} />
      </S.Card>
      <PokemonModal content={content} isOpen={modalIsOpen} setIsOpen={setModalIsOpen} />
    </>
  );
};

export default Card;
