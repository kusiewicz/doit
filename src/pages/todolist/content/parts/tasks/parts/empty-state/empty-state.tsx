import { Button } from '@parts/button/button';
import S from './empty-state.styles';

import { Mode } from '../../tasks';

export const EmptyState = ({ isToday, setMode }: { isToday?: boolean; setMode: Function }) => {
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
      <Button onClick={() => setMode(Mode.ADD)}>Dodaj zadanie</Button>
    </S.Wrapper>
  );
};
