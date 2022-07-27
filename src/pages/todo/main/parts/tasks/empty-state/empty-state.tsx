import { Mode } from '@pages/todo/main/main';
import { Button } from '@parts/button/button';
import { useNavigate } from 'react-router-dom';
import S from './empty-state.styles';

export const EmptyState = ({ tab }: { tab?: string }) => {
  const isToday = tab === Mode.TODAY;

  const EmptyIcon = () => {
    switch (tab) {
      case Mode.TODAY:
        return <S.EmptyTodayIcon />;
      case Mode.TOMORROW:
        return <S.EmptyTodayIcon />;
      case Mode.WEEK:
        return <S.EmptyWeekIcon />;
      default:
        return <S.EmptyWeekIcon />;
    }
  };

  const navigate = useNavigate();

  const Text = () => {
    switch (tab) {
      case Mode.TODAY:
        return 'Wszystko zrobione';
      case Mode.TOMORROW:
        return 'Zobacz, co masz zaplanowane na jutrzejszy dzień';
      case Mode.WEEK:
        return 'Plany na nadchodzący tydzień';
    }
  };

  const SubText = isToday
    ? 'Wygląda na to, że wszystko jest zorganizowane tak jak powinno.'
    : 'Wszystkie zadania do wykonania będą tu widoczne';

  return (
    <S.Wrapper>
      <EmptyIcon />
      <S.Text>{Text()}</S.Text>
      <S.SubText>{SubText}</S.SubText>
      <Button onClick={() => navigate('/app/add')}>Dodaj zadanie</Button>
    </S.Wrapper>
  );
};
