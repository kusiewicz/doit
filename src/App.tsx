import { Todolist } from './pages/todolist/todolist';
import { ThemeProvider } from './context/theme-provider';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

export const App = () => (
  <ThemeProvider>
    <QueryClientProvider client={queryClient}>
      <Todolist />
    </QueryClientProvider>
  </ThemeProvider>
);
