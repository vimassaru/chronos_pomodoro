import { Container } from './components/ui/Container';
import { Heading } from './components/ui/Heading';
import './styles/global.css';
import './styles/themes.css';

export const App = () => {
  return (
    <>
      <Container>
        <Heading>LOGO</Heading>
      </Container>
      <Container>
        <Heading>MENU</Heading>
      </Container>
    </>
  );
};
