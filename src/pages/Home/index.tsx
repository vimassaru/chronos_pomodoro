import { Container } from '../../components/ui/Container';
import { CountDown } from '../../components/ui/CountDown';
import { MainForm } from '../../components/ui/MainForm';
import { MainTemplate } from '../../templates/MainTemplate';

export const Home = () => {
  return (
    <>
      <MainTemplate>
        <Container>
          <CountDown />
        </Container>
        <Container>
          <MainForm />
        </Container>
      </MainTemplate>
    </>
  );
};
