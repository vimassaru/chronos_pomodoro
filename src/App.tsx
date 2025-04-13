import { TimerIcon } from 'lucide-react';
import { Heading } from './components/ui/Heading';

import './styles/global.css';
import './styles/themes.css';

export const App = () => {
  return (
    <>
      <Heading>
        Hello World
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>Lorem ipsum dolor sit amet.</p>
      <p>Lorem ipsum dolor sit amet.</p>
      <p>Lorem ipsum dolor sit amet.</p>
    </>
  );
};
