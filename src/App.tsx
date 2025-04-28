import { PlayCircleIcon } from 'lucide-react';
import { Container } from './components/ui/Container';
import { CountDown } from './components/ui/CountDown';
import { Cycles } from './components/ui/Cycles';
import { DefaultButton } from './components/ui/DefaultButton';
import { DefaultInput } from './components/ui/DefaultInput';
import { Logo } from './components/ui/Logo';
import { Menu } from './components/ui/Menu';

import './styles/global.css';
import './styles/themes.css';
import { Footer } from './components/ui/Footer';

export const App = () => {
  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Menu />
      </Container>
      <Container>
        <CountDown />
      </Container>
      <Container>
        <form className='form' action=''>
          <div className='formRow'>
            <DefaultInput
              labelText='Task'
              id='input'
              type='text'
              placeholder='Digite Algo'
            />
          </div>

          <div className='formRow'>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className='formRow'>
            <Cycles />
          </div>

          <div className='formRow'>
            <DefaultButton icon={<PlayCircleIcon />} />
          </div>
        </form>
      </Container>
      <Container>
        <Footer />
      </Container>
    </>
  );
};
