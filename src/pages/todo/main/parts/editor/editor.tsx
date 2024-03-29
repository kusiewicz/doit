import { useFormik } from 'formik';
import S from './editor.styles';
import dayjs, { Dayjs } from 'dayjs';
import { DatePicker } from './date-picker/date-picker';
import { createTask, editTask, getTask, Priorities } from '@pages/todo/main/api/tasks.actions';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { useUserInfo } from '@lib/firebase/use-user-info';
import { LoadingPage } from '@pages/loading/loading-page';

const now = dayjs();

export const Editor = () => {
  const priorities: { priority: Priorities; color: string; title: string }[] = [
    {
      priority: Priorities.LOW,
      color: 'lowPriority',
      title: 'Priorytet 1',
    },
    {
      priority: Priorities.MEDIUM,
      color: 'mediumPriority',
      title: 'Priorytet 2',
    },
    {
      priority: Priorities.HIGH,
      color: 'highPriority',
      title: 'Priorytet 3',
    },
  ];

  const { user } = useUserInfo();

  const navigate = useNavigate();

  const { id: taskId } = useParams<{ id: string }>();

  const { data, isLoading } = useQuery(
    ['task', user.id],
    () => getTask(taskId as string, user.id),
    {
      enabled: !!user.id && !!taskId,
      cacheTime: 0,
    },
  );

  const { title, description, priority, date } = data ?? {};

  const { handleSubmit, getFieldProps, setFieldValue, values } = useFormik({
    initialValues: {
      title: title || '',
      description: description || '',
      priority: (priority as Priorities) || 'Low',
      date: date || now,
      id: taskId || '',
    },
    enableReinitialize: true,
    onSubmit: (v) => {
      const vals = { ...v, ...(!taskId && { id: uuidv4() }), date: dayjs(v.date).toISOString() };
      if (taskId) {
        editTask(taskId, vals, user.id);
      } else {
        createTask(vals, user.id);
      }
      const dateToDayjs = dayjs(v.date);
      if (dateToDayjs.isToday()) {
        return navigate('/app/today');
      }
      if (dateToDayjs.isTomorrow()) {
        return navigate('/app/tomorrow');
      }
      return navigate('/app/upcoming');
    },
  });

  return !isLoading ? (
    <>
      <S.Header>{taskId ? 'Edit task' : 'Add task'}</S.Header>
      <form onSubmit={handleSubmit}>
        <S.Textbox>
          <S.Title placeholder="e.g. Hold meeting at 11" {...getFieldProps('title')} />
          <S.Description {...getFieldProps('description')} placeholder="Description" />
          <DatePicker
            date={dayjs(date)}
            onChange={(v: Dayjs) => {
              setFieldValue('date', v);
            }}
          />
          <S.Select
            {...getFieldProps('priority')}
            bordered={false}
            optionLabelProp="icon"
            dropdownMatchSelectWidth={false}
            dropdownAlign={{ offset: [-125, 0] }}
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

        <S.Add disabled={!values.title && !values.description} type="submit">
          {taskId ? 'Edit' : 'Add task'}
        </S.Add>
        <S.Cancel type="button" onClick={() => navigate('/')}>
          Cancel
        </S.Cancel>
      </form>
    </>
  ) : (
    <LoadingPage />
  );
};
