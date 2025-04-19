import { Container } from './components/ui/Container';
import { Heading } from './components/ui/Heading';
import { Logo } from './components/ui/Logo';
import { Menu } from './components/ui/Menu';

import './styles/global.css';
import './styles/themes.css';

export const App = () => {
  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Menu />
      </Container>
    </>
  );
};
