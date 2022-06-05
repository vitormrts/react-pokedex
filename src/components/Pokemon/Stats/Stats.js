import * as S from './Stats.styles';

const Stats = ({ stats }) => {
  const statsMap = stats.map(({ name, baseStat }) => (
    <S.Stat key={name}>
      <S.Name>{name}</S.Name>
      <S.BaseStat>{baseStat}</S.BaseStat>
    </S.Stat>
  ));

  return (
    <S.Container>
      <S.Title>Stats</S.Title>
      <S.Stats>{statsMap}</S.Stats>
    </S.Container>
  );
};

export default Stats;
