import { Link } from 'react-router-dom';
import { useState } from 'react';
import {
  Container,
  FirstSection,
  FourthSection,
  LinkWrapper,
  SecondSection,
  ThirdSection,
} from './styles';

import chevronLeft from '../../assets/images/icons/chevron-left.svg';
import chevronRight from '../../assets/images/icons/chevron-right.svg';

export default function Home() {
  const [slideMarginDesktop, setSlideMarginDesktop] = useState(0);
  const [slideMarginMobile, setSlideMarginMobile] = useState(0);

  const [startX, setStartX] = useState(null);
  const [dist, setDist] = useState(0);
  const threshold = 50;

  const handleTouchStart = (e) => {
    const touchObj = e.changedTouches[0];
    setStartX(touchObj.pageX);
    setDist(0);
  };

  const handleTouchMove = (e) => {
    if (!startX) return;

    const touchObj = e.changedTouches[0];
    const deltaX = touchObj.pageX - startX;

    setDist(deltaX);
  };

  const handleTouchEnd = () => {
    if (dist > threshold) {
      setSlideMarginMobile((prevState) => (prevState < 0 ? prevState + 360 : -1800));
    } else if (dist < -threshold) {
      setSlideMarginMobile((prevState) => (prevState >= -1560 ? prevState - 360 : 0));
    }
    setStartX(null);
  };

  function handleNextSlideDesktop() {
    setSlideMarginDesktop((prevState) => (prevState >= -2510 ? prevState - 510 : 0));
  }
  function handlePrevSlideDesktop() {
    setSlideMarginDesktop((prevState) => (prevState < 0 ? prevState + 510 : 0));
  }

  function handleNextSlideMobile() {
    setSlideMarginMobile((prevState) => (prevState >= -1560 ? prevState - 360 : 0));
  }
  function handlePrevSlideMobile() {
    setSlideMarginMobile((prevState) => (prevState < 0 ? prevState + 360 : -1800));
  }
  return (
    <Container>
      <FirstSection id="section1">
        <div>
          <h2>Galieta Barbershop</h2>
          <h1>O toque artístico que vai além do corte.</h1>

          <LinkWrapper>
            <Link to="/schedule">
              Agendar horário
            </Link>
          </LinkWrapper>
        </div>
      </FirstSection>

      <SecondSection id="section2">
        <p>
          Olá!👋 Bem-vindo à nossa experiência exclusiva em Lisboa!
          Na nossa barbearia, não se trata apenas de cortar cabelo -
          é sobre proporcionar uma jornada incrível.
          Nossos profissionais estão aqui para entender exatamente
          o que você deseja e tornar isso realidade.
          Se busca uma equipe amigável e dedicada a ouvir você, encontrou o lugar certo.
          Venha nos visitar e faça parte dessa experiência única!
        </p>
      </SecondSection>

      <ThirdSection>
        <div className="text-wrapper">
          <div className="text">
            <h2>Jornada de Estilo e Elegância</h2>
            <p>
              Descubra uma experiência única e inigualável no Galieta, onde a paixão pela arte
              da barbearia e do cuidado pessoal se unem para realçar a sua autenticidade.
            </p>
            <LinkWrapper>
              <Link to="/schedule">Agendar agora</Link>
            </LinkWrapper>
          </div>

        </div>
        <div className="cards-container">
          <div className="card">
            <svg className="ikonik-5m9l2k" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 512 512"><path className="path-2xzss" fill="currentColor" d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM183.2 132.6c-1.3-2.8-4.1-4.6-7.2-4.6s-5.9 1.8-7.2 4.6l-16.6 34.7-38.1 5c-3.1 .4-5.6 2.5-6.6 5.5s-.1 6.2 2.1 8.3l27.9 26.5-7 37.8c-.6 3 .7 6.1 3.2 7.9s5.8 2 8.5 .6L176 240.5l33.8 18.3c2.7 1.5 6 1.3 8.5-.6s3.7-4.9 3.2-7.9l-7-37.8L242.4 186c2.2-2.1 3.1-5.3 2.1-8.3s-3.5-5.1-6.6-5.5l-38.1-5-16.6-34.7zm160 0c-1.3-2.8-4.1-4.6-7.2-4.6s-5.9 1.8-7.2 4.6l-16.6 34.7-38.1 5c-3.1 .4-5.6 2.5-6.6 5.5s-.1 6.2 2.1 8.3l27.9 26.5-7 37.8c-.6 3 .7 6.1 3.2 7.9s5.8 2 8.5 .6L336 240.5l33.8 18.3c2.7 1.5 6 1.3 8.5-.6s3.7-4.9 3.2-7.9l-7-37.8L402.4 186c2.2-2.1 3.1-5.3 2.1-8.3s-3.5-5.1-6.6-5.5l-38.1-5-16.6-34.7zm6.3 175.8c-28.9 6.8-60.5 10.5-93.6 10.5s-64.7-3.7-93.6-10.5c-18.7-4.4-35.9 12-25.5 28.1c24.6 38.1 68.7 63.5 119.1 63.5s94.5-25.4 119.1-63.5c10.4-16.1-6.8-32.5-25.5-28.1z" /></svg>
            <h3>Experiência Única</h3>
            <p>
              Desfrute de uma experiência única em nossa barbearia,
              onde cada visita é memorável e centrada em você.
            </p>
          </div>
          <div className="card">
            <svg className="ikonik-gyjju" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24"><path className="path-pq80a" fill="currentColor" d="M13 7h-2v5.414l3.293 3.293 1.414-1.414L13 11.586z" /><path className="path-r17be" fill="currentColor" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" /></svg>
            <h3>No seu tempo, do seu jeito.</h3>
            <p>
              Faça do seu jeito! Na nossa barbearia, você manda.
              A gente adapta tudo do seu jeito, pra você sair daqui satisfeito e feliz.
            </p>
          </div>
          <div className="card">
            <svg className="ikonik-5fhcoh" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24"><path className="path-k27qu" fill="currentColor" d="m21.707 11.293-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707zM18.001 20H6v-9.585l6-6 6 6V15l.001 5z" /><path className="path-lr3ou" fill="currentColor" d="m12.223 11.641-.223.22-.224-.22a2.224 2.224 0 0 0-3.125 0 2.13 2.13 0 0 0 0 3.07L12 18l3.349-3.289a2.13 2.13 0 0 0 0-3.07 2.225 2.225 0 0 0-3.126 0z" /></svg>
            <h3>Sinta-se em Casa</h3>
            <p>
              Entre e sinta-se em casa! Nosso espaço é moderno e cheio de boas energias,
              feito para você relaxar e se sentir bem.
            </p>
          </div>
          <div className="card">
            <svg className="ikonik-y7poyh" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 1024 1024"><path className="path-pftf8" fill="currentColor" d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z" /></svg>
            <h3>Excelência em Cuidados</h3>
            <p>
              Cuidamos de você com o que há de melhor! Nossos produtos premium garantem resultados
              incríveis que vão te fazer se sentir ainda melhor.
            </p>
          </div>
        </div>
      </ThirdSection>

      <FourthSection
        $slideMargin={slideMarginDesktop}
        $slideMarginMobile={slideMarginMobile}
        className="carrossel"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <h1>Serviços</h1>
        <div className="slider">
          <div className="slides">
            <div className="slide slide1">
              <h3>Corte Fade</h3>
              <h3>12 €</h3>
            </div>

            <div className="slide slide2">
              <h3>Corte Social</h3>
              <h3>10 €</h3>
            </div>

            <div className="slide slide3">
              <h3>Corte Somente Máquina</h3>
              <h3>8 €</h3>
            </div>

            <div className="slide slide4">
              <h3>Corte Tesoura</h3>
              <h3>5 €</h3>
            </div>

            <div className="slide slide5">
              <h3>Cabelo e Barba</h3>
              <h3>12 €</h3>
            </div>

            <div className="slide slide6">
              <h3>Limpeza Fácil</h3>
              <h3>Em breve</h3>
            </div>
          </div>
        </div>

        <div className="buttons">
          <button type="button" onClick={handlePrevSlideDesktop} className="button-left-desktop btn">
            <img src={chevronLeft} alt="chevron-left" />
          </button>
          <button type="button" onClick={handleNextSlideDesktop} className="button-right-desktop btn">
            <img src={chevronRight} alt="chevron-right" />
          </button>
        </div>

        <div className="buttons">
          <button type="button" onClick={handlePrevSlideMobile} className="button-left-mobile">
            <img src={chevronLeft} alt="chevron-left" />
          </button>
          <button type="button" onClick={handleNextSlideMobile} className="button-right-mobile">
            <img src={chevronRight} alt="chevron-right" />
          </button>
        </div>
      </FourthSection>
    </Container>
  );
}
