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
        return 'Everything is done!';
      case Mode.TOMORROW:
        return 'See what you have planned for tomorrow!';
      case Mode.WEEK:
        return 'Plans for the upcoming week!';
    }
  };

  const SubText = isToday
    ? 'It seems that everything is organized as it should be.'
    : 'All tasks to be performed will be visible here.';

  return (
    <S.Wrapper>
      <EmptyIcon />
      <S.Text>{Text()}</S.Text>
      <S.SubText>{SubText}</S.SubText>
      <Button onClick={() => navigate('/app/add')}>Add task</Button>
    </S.Wrapper>
  );
};
