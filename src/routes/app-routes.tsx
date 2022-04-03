import { Todo } from '@pages/todo/todo';
import { Editor } from '@pages/todo/main/parts/editor/editor';
import { Tasks } from '@pages/todo/main/parts/tasks/tasks';
import { Routes, Route, Navigate } from 'react-router';

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/app/today" />} />
    <Route path="/app" element={<Todo />}>
      <Route path=":tab" element={<Tasks />} />
      <Route path="task/:id" element={<Editor />} />
      <Route path="add" element={<Editor />} />
    </Route>
  </Routes>
);
