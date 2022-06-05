import * as S from './Types.styles';

const Types = ({ types }) => {
  const typesMap = types.map(({ id, name, color }) => (
    <S.Type key={id} color={color}>
      <S.Name>{name}</S.Name>
    </S.Type>
  ));

  return <S.Types>{typesMap}</S.Types>;
};

export default Types;
