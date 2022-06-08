import * as S from './Types.styles';

const Types = ({ types }) => {
  const typesMap = types.map(({ name, color }) => (
    <S.Type key={name} color={color}>
      <S.Name>{name}</S.Name>
    </S.Type>
  ));

  return <S.Types>{typesMap}</S.Types>;
};

export default Types;
