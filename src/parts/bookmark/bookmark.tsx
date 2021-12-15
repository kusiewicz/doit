import S from './bookmark.styles';

export const Bookmark = ({
  title,
  icon,
  tasksNum,
}: {
  title: string;
  icon?: Function;
  tasksNum?: number;
}) => (
  <S.Wrapper>
    {icon && <S.Icon />}
    <S.Title>{title}</S.Title>
    {tasksNum && <S.TaskNum>{tasksNum}</S.TaskNum>}
  </S.Wrapper>
);
