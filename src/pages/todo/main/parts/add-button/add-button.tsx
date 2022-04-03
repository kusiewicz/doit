import { useNavigate } from 'react-router-dom';
import S from './add-button.styles';

export const Add = () => {
  const navigate = useNavigate();

  return (
    <S.Add onClick={() => navigate('/app/add')}>
      <S.PlusHover>
        <S.Plus />
      </S.PlusHover>
      Dodaj zadanie
    </S.Add>
  );
};
