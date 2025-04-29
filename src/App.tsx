import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider';
import { Home } from './pages/Home';

import './styles/global.css';
import './styles/themes.css';

export const App = () => {
  return (
    <TaskContextProvider>
      <Home />
    </TaskContextProvider>
  );
};
