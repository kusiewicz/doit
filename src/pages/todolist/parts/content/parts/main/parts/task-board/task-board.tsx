import { DatePicker } from './parts/date-picker/date-picker';
import S from './task-board.styles';

export const TaskBoard = ({ onClose }: { onClose: () => void }) => {
  const taskPriorities = [
    {
      priority: 'Low',
      color: 'lowPriority',
      title: 'Priorytet 1',
    },
    {
      priority: 'Medium',
      color: 'mediumPriority',
      title: 'Priorytet 2',
    },
    {
      priority: 'High',
      color: 'highPriority',
      title: 'Priorytet 3',
    },
  ];

  return (
    <>
      <S.TextboxWrapper>
        <S.TaskTitle placeholder="np. Zorganizuj spotkanie na 11" />
        <S.TaskDescription placeholder="Opis" />
        <DatePicker />
        <S.Select
          bordered={false}
          optionLabelProp="label"
          defaultValue="Low"
          dropdownMatchSelectWidth={false}
          dropdownAlign={{ offset: [-125, 0] }}
          dropdownStyle={{
            width: '250px',
          }}
        >
          {taskPriorities.map((v) => (
            <S.Option key={v.title} value={v.priority} label={<S.PriorityIcon color={v.color} />}>
              <S.PriorityIcon color={v.color} />
              <S.Priority>{v.title}</S.Priority>
            </S.Option>
          ))}
        </S.Select>
      </S.TextboxWrapper>

      <S.Add>Dodaj zadanie</S.Add>
      <S.Cancel onClick={onClose}>Anuluj</S.Cancel>
    </>
  );
};
