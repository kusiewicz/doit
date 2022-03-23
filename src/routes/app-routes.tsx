import { Todolist } from '@pages/todolist/todolist';
import { Routes, Route, Navigate } from 'react-router';

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/app/today" />} />
    <Route path="/app" element={<Todolist />}>
      <Route path=":tab" element={<Todolist />} />
      <Route path="task/:id" element={<Todolist />} />
    </Route>
  </Routes>
);
