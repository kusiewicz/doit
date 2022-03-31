import { useFormik } from 'formik';
import S from './editor.styles';
import dayjs, { Dayjs } from 'dayjs';
import { DatePicker } from './parts/date-picker/date-picker';
import { createTask } from '../../../../api/get-set-tasks';
import { v4 as uuidv4 } from 'uuid';

export const Editor = ({ onClose, taskId }: { onClose: () => void; taskId?: string }) => {
  const priorities = [
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
      id: '',
    },
    onSubmit: (v) => {
      const vals = { ...v, id: uuidv4(), date: v.date.toISOString() };
      createTask(vals);
      onClose();
    },
  });

  return (
    <>
      <form onSubmit={handleSubmit}>
        <S.Textbox>
          <S.Title {...getFieldProps('title')} placeholder="np. Zorganizuj spotkanie na 11" />
          <S.Description {...getFieldProps('description')} placeholder="Opis" />
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
            {priorities.map((v) => (
              <S.Option key={v.title} value={v.priority} icon={<S.PriorityIcon color={v.color} />}>
                <S.PriorityIcon color={v.color} />
                <S.Priority>{v.title}</S.Priority>
              </S.Option>
            ))}
          </S.Select>
        </S.Textbox>

        <S.Add type="submit">{taskId ? 'Edytuj' : 'Dodaj zadanie'}</S.Add>
        <S.Cancel type="button" onClick={onClose}>
          Anuluj
        </S.Cancel>
      </form>
    </>
  );
};
