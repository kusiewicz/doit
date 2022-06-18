import { TodoPage } from '@pages/todo/todo-page';
import { Editor } from '@pages/todo/main/parts/editor/editor';
import { Tasks } from '@pages/todo/main/parts/tasks/tasks';
import { Routes, Route, Navigate } from 'react-router';
import { AuthPage } from '@pages/auth/auth-page';
import { Register } from '@pages/auth/parts/register/register';
import { Login } from '@pages/auth/parts/login/login';
import { HomePage } from '@pages/home/home-page';

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/app/today" />} />
    <Route path="/app" element={<TodoPage />}>
      <Route path=":tab" element={<Tasks />} />
      <Route path="task/:id" element={<Editor />} />
      <Route path="add" element={<Editor />} />
    </Route>
    <Route path="/auth" element={<AuthPage />}>
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
    </Route>
    <Route path="/home" element={<HomePage />} />
  </Routes>
);
