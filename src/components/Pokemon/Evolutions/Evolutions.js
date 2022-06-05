import * as S from './Evolutions.styles';

const Evolutions = ({ evolutions }) => {
  const evolutionsMap = evolutions.map(({ name, image, minLevel }) => (
    <S.Evolution key={name}>
      <S.Info>
        <S.Name>{name}</S.Name>
        {minLevel && <S.MinLevel>Min. level: {minLevel}</S.MinLevel>}
      </S.Info>
      <S.Image src={image} alt={name} />
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
