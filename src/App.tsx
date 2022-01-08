import { Todolist } from './pages/todolist/todolist';
import { ThemeProvider } from './context/theme-provider';

export const App = () => (
  <ThemeProvider>
      <Todolist />
  </ThemeProvider>
);
