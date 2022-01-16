import S from './empty-state.styles';

export const EmptyState = ({ day }: { day: string }) => {
  const EmptyIcon = () => {
    if (day === 'today') {
      return <S.EmptyTodayIcon />;
    }
    return <S.EmptyTommorowIcon />;
  };

  const Text =
    day === 'today' ? 'Wszystko zrobione' : 'Zobacz, co masz zaplanowane na następne dni.';

  const SubText =
    day === 'today'
      ? 'Wygląda na to, że wszystko jest zorganizowane tak jak powinno.'
      : 'Wszystkie zadania do wykonania jutro będą tu widoczne';

  return (
    <S.Wrapper>
      <EmptyIcon />
      <S.Text>{Text}</S.Text>
      <S.SubText>{SubText}</S.SubText>
      <S.AddTaskButton>Dodaj zadanie</S.AddTaskButton>
    </S.Wrapper>
  );
};
