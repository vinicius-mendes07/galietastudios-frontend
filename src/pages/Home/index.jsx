import { Container } from './styles';

import FirstSection from './components/FirstSection';
import SecondSection from './components/SecondSection';
import ThirdSection from './components/ThirdSection';
import FourthSection from './components/FourthSection';
import FifthSection from './components/FifthSection';
import SixthSection from './components/SixthSection';

export default function Home() {
  return (
    <Container>
      <FirstSection />

      <SecondSection />

      <ThirdSection />

      <FourthSection />

      <FifthSection />

      <SixthSection />
    </Container>
  );
}
