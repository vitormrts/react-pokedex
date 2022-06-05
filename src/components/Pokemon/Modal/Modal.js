import { Types, Stats, Evolutions } from 'components/Pokemon';
import * as S from './Modal.styles';

const Modal = ({ content, isOpen, setIsOpen }) => {
  const {
    id,
    name,
    image,
    types,
    description,
    genera,
    captureRate,
    growthRate,
    habitat,
    evolutions,
    stats
  } = content;

  return (
    <S.Overlay isOpen={isOpen}>
      <S.Content>
        <S.CloseButton onClick={() => setIsOpen(!isOpen)} />
        <S.Info>
          <S.Image src={image} alt={name} />
          <S.Id>#{id}</S.Id>
          <S.Name>{name}</S.Name>
          <S.Genera>{genera}</S.Genera>
          <Types types={types} />
          <S.PokedexEntry>POKÉDEX ENTRY</S.PokedexEntry>
          <S.Description>{description}</S.Description>
          <S.Habitat>Habitat: {habitat}</S.Habitat>
          <S.CaptureRate>Capture Rate: {captureRate}</S.CaptureRate>
          <S.GrowthRate>Growth Rate: {growthRate}</S.GrowthRate>
        </S.Info>
        <S.Details>
          <Stats stats={stats} />
          <Evolutions evolutions={evolutions} />
        </S.Details>
      </S.Content>
    </S.Overlay>
  );
};

export default Modal;
