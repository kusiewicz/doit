import { Button } from '@parts/button/button';
import S from './empty-state.styles';

export const EmptyState = ({
  isToday,
  setAddingMode,
}: {
  isToday: boolean;
  setAddingMode: Function;
}) => {
  const EmptyIcon = () => {
    if (isToday) {
      return <S.EmptyTodayIcon />;
    }
    return <S.EmptyTommorowIcon />;
  };

  const Text = isToday ? 'Wszystko zrobione' : 'Zobacz, co masz zaplanowane na następne dni.';

  const SubText = isToday
    ? 'Wygląda na to, że wszystko jest zorganizowane tak jak powinno.'
    : 'Wszystkie zadania do wykonania jutro będą tu widoczne';

  return (
    <S.Wrapper>
      <EmptyIcon />
      <S.Text>{Text}</S.Text>
      <S.SubText>{SubText}</S.SubText>
      <Button onClick={() => setAddingMode(true)}>Dodaj zadanie</Button>
    </S.Wrapper>
  );
};
