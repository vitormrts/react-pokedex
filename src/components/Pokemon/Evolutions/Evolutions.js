import { ArrowDownIcon } from 'icons';
import * as S from './Evolutions.styles';

const Evolutions = ({ evolutions }) => {
  const evolutionsMap = evolutions.map(({ name, minLevel }, index) => (
    <S.Evolution key={name}>
      <S.Info>
        <S.Name>{name}</S.Name>
        {minLevel && <S.MinLevel>Min. level: {minLevel}</S.MinLevel>}
        {index !== evolutions.length - 1 && <ArrowDownIcon />}
      </S.Info>
    </S.Evolution>
  ));

  return (
    <S.Container>
      <S.Title>Evolutions</S.Title>
      <S.Evolutions>{evolutionsMap}</S.Evolutions>
    </S.Container>
  );
};

export default Evolutions;
