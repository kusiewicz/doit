import { Mode } from '@pages/todo/main/main';
import { Button } from '@parts/button/button';
import { useNavigate } from 'react-router-dom';
import S from './empty-state.styles';

export const EmptyState = ({ tab }: { tab?: string }) => {
  const isToday = tab === Mode.TODAY;

  const EmptyIcon = () => {
    if (isToday) {
      return <S.EmptyTodayIcon />;
    }
    return <S.EmptyTommorowIcon />;
  };

  const navigate = useNavigate();

  const Text = isToday ? 'Wszystko zrobione' : 'Zobacz, co masz zaplanowane na następne dni.';

  const SubText = isToday
    ? 'Wygląda na to, że wszystko jest zorganizowane tak jak powinno.'
    : 'Wszystkie zadania do wykonania będą tu widoczne';

  return (
    <S.Wrapper>
      <EmptyIcon />
      <S.Text>{Text}</S.Text>
      <S.SubText>{SubText}</S.SubText>
      <Button onClick={() => navigate('/app/add')}>Dodaj zadanie</Button>
    </S.Wrapper>
  );
};
