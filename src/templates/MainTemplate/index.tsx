import { Container } from '../../components/ui/Container';
import { Logo } from '../../components/ui/Logo';
import { Menu } from '../../components/ui/Menu';
import { Footer } from '../../components/ui/Footer';

type MainTemplateProps = {
  children: React.ReactNode;
};

export const MainTemplate = ({ children }: MainTemplateProps) => {
  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Menu />
      </Container>
      <Container>{children}</Container>
      <Container>
        <Footer />
      </Container>
    </>
  );
};
