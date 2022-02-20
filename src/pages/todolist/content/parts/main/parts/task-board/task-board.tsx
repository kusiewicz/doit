import { useFormik } from 'formik';
import S from './task-board.styles';
import dayjs, { Dayjs } from 'dayjs';
import { DatePicker } from './parts/date-picker/date-picker';

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

  const { handleSubmit, getFieldProps, values, setFieldValue } = useFormik({
    initialValues: {
      title: '',
      description: '',
      priority: 'Low',
      date: dayjs(),
    },
    onSubmit: (v) => console.log(v),
  });

  return (
    <>
      <form onSubmit={handleSubmit}>
        <S.TextboxWrapper>
          <S.TaskTitle {...getFieldProps('title')} placeholder="np. Zorganizuj spotkanie na 11" />
          <S.TaskDescription {...getFieldProps('description')} placeholder="Opis" />
          <DatePicker
            date={values.date}
            onChange={(v: Dayjs) => {
              setFieldValue('date', v);
            }}
          />
          <S.Select
            bordered={false}
            optionLabelProp="icon"
            dropdownMatchSelectWidth={false}
            dropdownAlign={{ offset: [-125, 0] }}
            value={values.priority}
            dropdownStyle={{
              width: '250px',
            }}
            onChange={(v) => setFieldValue('priority', v)}
          >
            {taskPriorities.map((v) => (
              <S.Option key={v.title} value={v.priority} icon={<S.PriorityIcon color={v.color} />}>
                <S.PriorityIcon color={v.color} />
                <S.Priority>{v.title}</S.Priority>
              </S.Option>
            ))}
          </S.Select>
        </S.TextboxWrapper>

        <S.Add type="submit">Dodaj zadanie</S.Add>
        <S.Cancel onClick={onClose}>Anuluj</S.Cancel>
      </form>
    </>
  );
};
