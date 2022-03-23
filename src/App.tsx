import { ThemeProvider } from './context/theme-provider';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes/app-routes';
const queryClient = new QueryClient();

export const App = () => (
  <BrowserRouter>
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <AppRoutes />
      </QueryClientProvider>
    </ThemeProvider>
  </BrowserRouter>
);
