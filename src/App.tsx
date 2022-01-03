import { Todolist } from './pages/todolist/todolist';
import { ThemeProvider } from './context/theme-provider';
import { Wrapper } from './parts/wrapper/wrapper';

export const App = () => (
  <ThemeProvider>
    <Wrapper>
      <Todolist />
    </Wrapper>
  </ThemeProvider>
);
