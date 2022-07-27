import { TodoPage } from '@pages/todo/todo-page';
import { Editor } from '@pages/todo/main/parts/editor/editor';
import { Tasks } from '@pages/todo/main/parts/tasks/tasks';
import { Routes, Route, Navigate } from 'react-router';
import { AuthPage } from '@pages/auth/auth-page';
import { Register } from '@pages/auth/parts/form/register/register';
import { Login } from '@pages/auth/parts/form/login/login';
import { HomePage } from '@pages/home/home-page';
import { useUserInfo } from '@lib/firebase/use-user-info';
import { Outlet } from 'react-router-dom';

export const AppRoutes = () => {
  const { isLoggedIn } = useUserInfo();

  const AuthorizedRoute = () => {
    if (!isLoggedIn) {
      return <Navigate to="/home" />;
    }
    return <Outlet />;
  };

  const UnauthorizedRoute = () => {
    if (isLoggedIn) {
      return <Navigate to="/app/today" />;
    }
    return <Outlet />;
  };

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/app/today" />} />
      <Route path="/app" element={<AuthorizedRoute />}>
        <Route path="/app" element={<TodoPage />}>
          <Route path=":tab" element={<Tasks />} />
          <Route path="task/:id" element={<Editor />} />
          <Route path="add" element={<Editor />} />
        </Route>
      </Route>
      <Route path="/auth" element={<UnauthorizedRoute />}>
        <Route path="/auth" element={<AuthPage />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Route>
      <Route path="/home" element={<HomePage />} />
      <Route path="*" element={<p>Nie ma</p>} />
    </Routes>
  );
};
