import { Container } from './styles';

import FirstSection from './components/FirstSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import HowToScheduleSection from './components/HowToScheduleSection';
import VisitUsSection from './components/VisitUsSection';

export default function Home() {
  return (
    <Container>
      <FirstSection />

      <AboutSection />

      <ServicesSection />

      <HowToScheduleSection />

      <VisitUsSection />
    </Container>
  );
}
