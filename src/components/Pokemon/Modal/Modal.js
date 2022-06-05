import { Types } from 'components/Pokemon';
import * as S from './Modal.styles';

const Modal = ({ content, isOpen, setIsOpen }) => {
  const { id, name, image, types, description, genera } = content;

  return (
    <S.Overlay isOpen={isOpen}>
      <S.Content>
        <S.CloseButton onClick={() => setIsOpen(!isOpen)} />
        <S.Image src={image} alt={name} />
        <S.Id>#{id}</S.Id>
        <S.Name>{name}</S.Name>
        <S.Genera>{genera}</S.Genera>
        <Types types={types} />
        <S.PokedexEntry>POKÉDEX ENTRY</S.PokedexEntry>
        <S.Description>{description}</S.Description>
      </S.Content>
    </S.Overlay>
  );
};

export default Modal;
