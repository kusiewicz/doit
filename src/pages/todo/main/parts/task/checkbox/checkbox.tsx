import S from './checkbox.styles';
import { Priorities } from '@pages/todo/main/api/tasks.actions';

export const Checkbox = ({
  className,
  onClick,
  priority,
}: {
  className?: string;
  onClick: () => void;
  priority: Priorities;
}) => {
  const getColor = () => {
    if (priority === Priorities.LOW) {
      return 'lowPriority';
    }
    if (priority === Priorities.MEDIUM) {
      return 'mediumPriority';
    }
    return 'highPriority';
  };

  return (
    <S.Wrapper className={className} onClick={onClick} color={getColor()}>
      <S.Check />
    </S.Wrapper>
  );
};
